// task1
// function stringFrom(){
//     var result = "";
//     for(let i = 0; i < arguments.length; i++){
//         result+=arguments[i];
//         if(i!==arguments.length-1) result+=" ";
//     }
//     return result;
// }
// console.log(stringFrom("Do", "I", "love", "dogs", "?", true, 28));

// task2
// function minFromAllArgs(){
//     var array = [...arguments];
//     var a = array[0];
//     array.forEach(element => {
//         if(element < a) a = element;
//     });
//     return a;
// }
// console.log(minFromAllArgs(12, 2, "121", 12.4, 'a', -12));

// task3
// function numbers(){
//     var array = [...arguments];
//     var counter = 0;
//     array.forEach(element => {
//         if(typeof(element) === "number") counter++;
//     });
//     return counter;
// }
// console.log(numbers(0, 1, "", '', -12));

// task4
// function mean(){
//     var array = [...arguments];
//     var sum = 0;
//     var counter = 0;
//     array.forEach(element => {
//         if(typeof(element) === "number") {
//             counter++;
//             sum+=element;
//         }
//     });
//     sum /= counter;
//     return sum;
// }
// console.log(mean(1, "as", true, 2, 3, 5));