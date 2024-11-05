import { getGradient } from './get-gradient';

describe('getGradient', () => {
  it('should return a linear gradient string', () => {
    const gradient = { from: '#000000', to: '#ffffff', deg: 45 };
    const result = getGradient(gradient);
    expect(result).toBe('linear-gradient(45deg, #000000 0%, #ffffff 100%)');
  });

  it('should handle undefined input', () => {
    const result = getGradient(undefined);
    expect(result).toBe('linear-gradient(0deg, 0% 0%, 0% 100%)');
  });

  it('should handle missing deg property', () => {
    const gradient = { from: '#000000', to: '#ffffff' };
    const result = getGradient(gradient);
    expect(result).toBe('linear-gradient(0deg, #000000 0%, #ffffff 100%)');
  });
});
