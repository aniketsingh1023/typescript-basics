interface User {
  Name : string , 
  Age : number     
}
function SumOfAges (user1 : User , User2: User){
    return user1.Age + User2.Age
} 
let user1 : User = {
  Name : "Aniket",
  Age : 21
}
let user2 : User = {
  Name : "Aditya",
  Age : 21
}
let Sum = SumOfAges(user1 , user2);
console.log (Sum)
// 1. Pick 
// Pick is used when some of the properties from a interface or type 
// gets used and some are not , so instead of writing redundant code 
// pick allows you to create a new type by selecting a set of properties(keys) from an existing type
// type UpdateProps = Pick<User, 'Name' >
// function updateUser (updatedprops : UpdateProps){
//     //hit the database to update the user
// }
// 2. Partial 
type UpdateProps = Pick<User , 'Name' >
type UpdatePropsOptional = Partial<UpdateProps>
function updateUser2(updateprops : UpdatePropsOptional){
  // hit the database

}

updateUser2({
  Name : "Aniket"// with the use of parial its now optional 
})

//3 ReadOnly 

//When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.
interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
};

//config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.


/**
 * 
 * Record
Record let’s you give a cleaner type to objects
You can type objects like follows - 

 * 
 * 
 * 
 */
interface User1 {
  id: string;
  name: string;
}

type Users = Record<string, User1>;

const users: Users = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }


//MAPS 
// TAken Reference From C++
//

const usersMap = new Map ()
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' })

