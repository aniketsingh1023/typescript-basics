//type let you do the same thing as interfaces ie let you desfne custom types but apart from that 
// it has some additonal features like it let you add union, joins of type
//ex

type StringOrNumber = string | number ; //union can have either / or all values
function sum (a : StringOrNumber , b :StringOrNumber){
   
} 
type manager = {
    name :string , 
    experience : number
}
type employee = {
    name : string , 
    skills : {
        skill1 : string , 
        skill2 : string , 
        skill3 : string
    },
}

type TeamLead = manager & employee ; //join or Intersection 

let e : employee = {
    name : 'Aniket Singh', 
    skills : { skill1: 'HTML', skill2: 'CSS', skill3: 'JAVASCRIPT'},
}

let m : manager = {
    name : 'Aniket Singh', 
    experience : 2
}

let t : TeamLead = {
    name : 'Aniket Singh', 
    skills : { skill1: 'HTML', skill2: 'CSS', skill3: 'JAVASCRIPT'},
    experience : 2
}

type User = {
    Name : string , 
    Age : number
}


function isLegal(user : User){
    return user.Age > 18 
}