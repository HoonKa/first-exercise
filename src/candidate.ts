function calculateTotal(vote: Candidate): number {
  let total: number = 0;
  for (let i = 0; i < vote.votes.length; i += 1) {
    total += vote.votes[i];
  }

  // const totalVote: Array<number> = [];
  // let total: number = 0;
  // for (let i = 0; i < vote.length; i += 1) {
  //   total += vote[i];
  //   totalVote.push(total);
  // }

  // return totalVote;
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

function calculatePrecinct(precinct: Array<Candidate>, count: number): Array<number> {
  const result: Array<number> = [];
  for (let i = 0; i < precinct[0].votes.length; i += 1) {
    let total = 0;
    for (let j = 0; j < count; j += 1) {
      total += precinct[j].votes[i];
    }
    result.push(total);
  }

  return result;
}

function calculateSpent(person: Array<Candidate>, totalVotes: Array<number>): Array<number> {
  const spent: Array<number> = [];

  for (let i = 0; i < person.length; i += 1) {
    spent[i] = Math.round(100 * (person[i].funding / totalVotes[i])) / 100;
  }

  return spent;
}

export { calculateTotal };
export { calculateVotePercentage };
export { calculatePrecinct };
export { calculateSpent };
