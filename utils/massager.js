export function problemMassager(problems) {
  return problems.map(({ label, probability, impact }) => ({
    x: impact,
    y: probability,
    label,
  }));
}
