"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SumOfAges(user1, User2) {
    return user1.Age + User2.Age;
}
let user1 = {
    Name: "Aniket",
    Age: 21
};
let user2 = {
    Name: "Aditya",
    Age: 21
};
let Sum = SumOfAges(user1, user2);
console.log(Sum);
function updateUser2(updateprops) {
    // hit the database
}
updateUser2({
    Name: "Aniket" // with the use of parial its now optional 
});
const config = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
const users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
//# sourceMappingURL=AdvanceTypeScriptAPI.js.map