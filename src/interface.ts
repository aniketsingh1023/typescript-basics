// we cant declare type of each object again and again 
// it would better if we could just add them once and use those types again and again 
// this could be done by types and interfaces

interface People { // this is basically a custom type declared by us 
    firstname : string , 
    lastname : string, 
   
}
function greet (user: People){

}

//one interface can use other interfaces

// classes can be implemented using interfaces 

// ex

class Manager implements People {
    firstname : string ;
    lastname : string;  //attributes
    constructor (firstname : string, lastname : string) {
             this.firstname = firstname;
             this.lastname = lastname;
    }
} //note : this can be done directly by objects and is done but classes provide some qualities and are used in some usecases

let user = new Manager("Aniket","Singh")
console.log(user.firstname);


//interview ques : difference between interfaces and types 
// one major differnce is we can implement classes in interfaces

// difference between abstract class and a interface
// we can add default implementaton as well 

//ex 

abstract class User {
    name : string;
    constructor (name : string){
        this.name = name;
    }
    abstract greet ():  string;
    hello(){ 
        console.log("hi there") // default implementation (key difference) between implenting an iterface and implementing an abstract class
    }
}

class Employee extends User {
    name : string ; 
    constructor(name: string){
        super(name)
        this.name = name;
    }
    greet(){
        return "hi" +this.name; //implentation
    }

}