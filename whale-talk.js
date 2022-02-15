// Whale Talk
// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

// There are a few simple rules for translating text to whale language:

// There are no consonants. Only vowels excluding “y”.
// The u‘s and e‘s are extra long, so we must double them in our program.
// Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

// To accomplish this translation, we can use our knowledge of loops. Let’s get started!

// If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.


// ATTEMPT 1:

// const input = 'turpentine and turtles';
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// const resultArray = [];



// for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//         if (input[i] === vowels[j]) {
//             if (input[i] === 'e') {
//                 resultArray.push('ee');
//             }
//             else if (input[i] === 'u') {
//                 resultArray.push('uu');
//             }
//             else {
//                 resultArray.push(input[i]);
//             }
//         }
//     }
// }

// console.log(resultArray.join('').toUpperCase());

// ______________________________ 

// ATTEMPT 2:

// const input = `The peanut butter is extra dark today`;
const input = 'turpentine and turtles';

const vowels = [`a`, `e`, `i`, `o`, `u`];

const result = [];

for (let eachLetter = 0; eachLetter < input.length; eachLetter++) {
    for (let eachVowel = 0; eachVowel < vowels.length; eachVowel++) {
        if (input[eachLetter] === vowels[eachVowel]) {
            if (input[eachLetter] === `e`) {
                result.push(`ee`);
            } else if (input[eachLetter] === `u`) {
                result.push(`uu`);
            }
            else {
                result.push(input[eachLetter]);
            }
        }
    }
};

console.log(result.join("").toUpperCase());

console.log(`check`);