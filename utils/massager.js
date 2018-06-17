export function problemMassager(problems, filterTag) {
  const filteredProblems =
    filterTag === 'none'
      ? problems
      : problems.filter(problem => problem.tags.includes(filterTag));

  return filteredProblems.map((problem, index) => {
    const impact = problem.impact + index * 0.01;
    const probability = problem.probability + index * 0.01;

    return {
      x: impact > 1 ? 1 : impact,
      y: probability > 1 ? 1 : probability,
      label: problem.label,
    };
  });
}
