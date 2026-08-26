export function calculateRecoverableHours(employees: number, hoursPerWeek: number): number {
  if (employees < 0 || hoursPerWeek < 0) return 0;
  return employees * hoursPerWeek * 4; // 4 semanas al mes
}

export function calculateMaturityScore(answers: Record<string, unknown>): number {
  let score = 0;
  Object.values(answers).forEach(val => {
    const num = Number(val);
    if (Number.isFinite(num)) {
      score += num;
    }
  });
  return Math.max(0, Math.round(((score - 20) / 80) * 100));
}
