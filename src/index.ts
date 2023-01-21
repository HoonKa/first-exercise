// import { merge01 } from './mergePart1';
// import for part1.
import { merge02 } from './mergePart2';
import { checkWord } from './checkWord';
import {
  calculateTotal,
  calculateVotePercentage,
  calculatePrecinct,
  calculateSpent,
} from './candidate';

// const array1: Array<number> = [4, 5, 23, 18, 9, -5];
// const array2: Array<number> = [18, 74, 88, 3, 7, 44];
// arrays for part1.

const array1: Array<number> = [18, 74, 88, 3];
const array2: Array<number> = [4, 5, 23, 18, 9, -5, 31];

const mergedArray: Array<number> = merge02(array1, array2);

// console.log(merge01(array1, array2));
// console for part 1.

console.log(mergedArray);

//

const secretWord = 'spoke';
const attempt = 'scope';

const arrayWord: Array<string> = checkWord(attempt, secretWord);
console.log(arrayWord);

const attempts = ['rains', 'shout', 'scope', 'spoke'];

for (const word of attempts) {
  const result = checkWord(word, 'spoke');
  console.log(result);
}

//

const candidate: Array<Candidate> = [
  {
    name: 'Edward Underwood',
    votes: [192, 147, 186, 114, 267],
    funding: 58182890,
  },
  {
    name: 'Rose Olson',
    votes: [48, 90, 12, 21, 13],
    funding: 78889263,
  },
  {
    name: 'Leonard Willis',
    votes: [206, 312, 121, 408, 382],
    funding: 36070689,
  },
  {
    name: 'Nathaniel Taylor',
    votes: [37, 21, 38, 39, 29],
    funding: 631792197,
  },
];

const totalvotes: Array<number> = candidate.map(calculateTotal);
const totalpercentage: Array<number> = calculateVotePercentage(totalvotes);

for (let i = 0; i < candidate.length; i += 1) {
  console.log(`${candidate[i].name} -- ${totalvotes[i]} votes -- ${totalpercentage[i]}%`);
}

const precinctPercentage: Array<number> = calculatePrecinct(candidate, candidate.length);
const percentageVote = [];
for (let i = 0; i < candidate.length; i += 1) {
  console.log(`${candidate[i].name}:`);
  for (let j = 0; j < candidate[0].votes.length; j += 1) {
    percentageVote[j] =
      Math.round(100 * ((candidate[i].votes[j] / precinctPercentage[j]) * 100)) / 100;
    console.log(` Precinct ${j + 1} -- ${percentageVote[j]}%`);
  }
}

const spent: Array<number> = calculateSpent(candidate, totalvotes);
for (let i = 0; i < candidate.length; i += 1) {
  console.log(`${candidate[i].name} spent $${spent[i]} per vote`);
}

//
const name1 = candidate[0].name;
const name2 = candidate[1].name;
const name3 = candidate[2].name;
const name4 = candidate[3].name;
const per1 = totalpercentage[0];
const per2 = totalpercentage[1];
const per3 = totalpercentage[2];
const per4 = totalpercentage[3];

if (per1 > per2 && per1 > per3 && per1 > per4) {
  console.log(`${name1} won the election.`);
} else if (per2 > per1 && per2 > per3 && per2 > per4) {
  console.log(`${name2} won the election.`);
} else if (per3 > per1 && per3 > per2 && per3 > per4) {
  console.log(`${name3} won the election.`);
} else {
  console.log(`${name4} won the election.`);
}
