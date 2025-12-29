"use strict";
// function getMax(nums : number[]){ // this is how a array is desfined 
//     let maxValue = -10000;
//     for (let i = 0 ; i < nums.length ; i++){
//         if (nums[i] > maxValue){
//             maxValue = nums[i]
//         }
//     }
//     return maxValue ; 
// }
Object.defineProperty(exports, "__esModule", { value: true });
function getAdultUsers(users) {
    return users.filter(user => user.age > 18);
}
let AdultUsers = getAdultUsers([
    { firstName: "John", lastName: "Doe", age: 2 },
    { firstName: "Jane", lastName: "Smith", age: 19 }
]);
console.log(AdultUsers);
//# sourceMappingURL=arrays.js.map