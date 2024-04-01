function getIntrodue(firstName, lastName) {
    console.log({
        firstName,
        lastName
    })
}

getIntrodue('Amit', 'Kumar');

const arr = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = arr;

console.log(e)

// function plusMinus(arr) {
//     // Write your code here
//     let pos = 0,
//         neg = 0,
//         zero = 0;
//     const len = arr.length || 0;

//     arr.forEach((val) => {
//         if (val > 0) {
//             pos++;
//         } else if (val < 0) {
//             neg++;
//         } else {
//             zero++;
//         }
//     });

//     console.log((pos / len) || 0);
//     console.log((neg / len) || 0);
//     console.log((zero / len) || 0);

// }