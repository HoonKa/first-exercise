function calculateTotal(vote: Candidate): number {
  let total: number = 0;
  for (let i = 0; i < vote.votes.length; i += 1) {
    total += vote.votes[i];
  }

  return total;
}

function calculateVotePercentage(total: Array<number>): Array<number> {
  const percentage: Array<number> = [];
  let alltotal: number = 0;
  for (let i = 0; i < total.length; i += 1) {
    alltotal += total[i];
  }
  for (let i = 0; i < total.length; i += 1) {
    percentage.push(Math.round(100 * ((total[i] / alltotal) * 100)) / 100);
  }

  return percentage;
}

function calculatePrecinct(vote: Candidate): Array<number> {
  const precinctPercentage: Array<number> = [];
  const total: Array<number> = [];
  let total1: number = 0;
  total1 += vote.votes[0];
  total.push(total1);
  let total2: number = 0;
  total2 += vote.votes[1];
  total.push(total2);
  let total3: number = 0;
  total3 += vote.votes[2];
  total.push(total3);
  let total4: number = 0;
  total4 += vote.votes[3];
  total.push(total4);
  for (let i = 0; i < 3; i += 1) {
    precinctPercentage.push(vote.votes[i] / total[i]);
  }

  return precinctPercentage;
}

export { calculateTotal };
export { calculateVotePercentage };
export { calculatePrecinct };
