import { render, screen } from '@/test-utils';
import { Welcome } from './Welcome';

describe('Welcome component', () => {
  it('has correct Taro Contact section link', () => {
    render(<Welcome />);
    expect(screen.getByText('Go to Contacts')).toHaveAttribute('href', '/contacts');
  });
});
