"use strict";
// we cant declare type of each object again and again 
// it would better if we could just add them once and use those types again and again 
// this could be done by types and interfaces
Object.defineProperty(exports, "__esModule", { value: true });
function greet(user) {
}
//one interface can use other interfaces
// classes can be implemented using interfaces 
// ex
class Manager {
    firstname;
    lastname; //attributes
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
} //note : this can be done directly by objects and is done but classes provide some qualities and are used in some usecases
let user = new Manager("Aniket", "Singh");
console.log(user.firstname);
//interview ques : difference between interfaces and types 
// one major differnce is we can implement classes in interfaces
// difference between abstract class and a interface
// we can add default implementaton as well 
//ex 
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("hi there"); // default implementation (key difference) between implenting an iterface and implementing an abstract class
    }
}
class Employee extends User {
    name;
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return "hi" + this.name; //implentation
    }
}
//# sourceMappingURL=interface.js.map