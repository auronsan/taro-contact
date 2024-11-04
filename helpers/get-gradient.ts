type GradientProps = {
  from: string;
  to: string;
  deg?: number;
};

export function getGradient(gradient: GradientProps | undefined) {
  const merged = {
    from: gradient?.from,
    to: gradient?.to,
    deg: gradient?.deg || 0,
  };

  return `linear-gradient(${merged.deg}deg, ${merged.from} 0%, ${merged.to} 100%)`;
}
