// we cant declare type of each object again and again 
// it would better if we could just add them once and use those types again and again 
// this could be done by types and interfaces

interface UserTypes { // this is basically a custom type declared by us 
    firstname : string , 
    lastname : string, 
    age : number
}
function greet (user: UserTypes){

}