export function problemMassager(problems, filterTag) {
  const filteredProblems =
    filterTag === 'none'
      ? problems
      : problems.filter(problem => problem.tags.includes(filterTag));

  return filteredProblems.map(({ label, probability, impact }) => ({
    x: impact,
    y: probability,
    label,
  }));
}
