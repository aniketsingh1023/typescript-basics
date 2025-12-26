
// function getMax(nums : number[]){ // this is how a array is desfined 
//     let maxValue = -10000;
//     for (let i = 0 ; i < nums.length ; i++){
//         if (nums[i] > maxValue){
//             maxValue = nums[i]
//         }
//     }
//     return maxValue ; 
// }

// getMax([1,2,3])





//write a function which takes array of users and returns array of names of users who are above 18 years and live in 'New York'

interface User {
    firstName:string;
    lastName:string;
    age:number;
}


function getAdultUsers ( users : User[]){
    return users.filter(user => user.age > 18)
}
let AdultUsers = getAdultUsers([
    { firstName: "John", lastName: "Doe", age: 2 },
    { firstName: "Jane", lastName: "Smith", age: 19 }
]);
console.log(AdultUsers);