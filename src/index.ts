// import { merge01 } from './mergePart1';
// import for part1.
import { merge02 } from './mergePart2';
import { checkWord } from './checkWord';
import { calculateTotal, calculateVotePercentage, calculatePrecinct } from './candidate';

// const array1: Array<number> = [4, 5, 23, 18, 9, -5];
// const array2: Array<number> = [18, 74, 88, 3, 7, 44];
// arrays for part1.

const array1: Array<number> = [18, 74, 88, 3];
const array2: Array<number> = [4, 5, 23, 18, 9, -5, 31];

const mergedArray: Array<number> = merge02(array1, array2);

// console.log(merge01(array1, array2));
// console for part 1.

console.log(mergedArray);

const secretWord = 'spoke';
const attempt = 'scope';

const arrayWord: Array<string> = checkWord(attempt, secretWord);
console.log(arrayWord);

const attempts = ['rains', 'shout', 'scope', 'spoke'];

for (const word of attempts) {
  const result = checkWord(word, 'spoke');
  console.log(result);
}

const candidate: Array<Candidate> = [
  {
    name: 'Edward Underwood',
    votes: [192, 147, 186, 114, 267],
    fundings: 58182890,
  },
  {
    name: 'Rose Olson',
    votes: [48, 90, 12, 21, 13],
    fundings: 78889263,
  },
  {
    name: 'Leonard Willis',
    votes: [206, 312, 121, 408, 382],
    fundings: 36070689,
  },
  {
    name: 'Nathaniel Taylor',
    votes: [37, 21, 38, 39, 29],
    fundings: 631792197,
  },
];
const totalvotes: Array<number> = candidate.map(calculateTotal);

// for (const total of totalvotes) {
//  console.log(total);
console.log(totalvotes);

const totalpercentage: Array<number> = calculateVotePercentage(totalvotes);
console.log(totalpercentage);
for (let i = 0; i < candidate.length; i += 1) {
  console.log(candidate.name[i] '--' candidate.votes[i]' votes' '--' totalpercentage[i]'%');
}
console.log();
const precinctPercentage: Array<number> = candidate.map(calculatePrecinct);
console.log(precinctPercentage);

/*
function push(arg0: number): number[] {
  throw new Error('Function not implemented.');
} */
// Edward Underwood spent  $64219.53 per vote, 906 vote
// Rose Olson spent  $428745.99 per vote, 184 vote
// Leonard Willis spent  $25241.91 per vote, 1429 vote
// Nathaniel Taylor spent  $38523914.25 per vote, 164 vote
