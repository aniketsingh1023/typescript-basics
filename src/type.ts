//type let you do the same thing as interfaces ie let you desfne custom types but apart from that 
// it has some additonal features like it let you add union, joins of type
//ex

type StringOrNumber = string | number ; //union
function sum (a : StringOrNumber , b :StringOrNumber){
   
} 
type manager = {
    name :string , 
    experience : number
}
type employee = {
    name : string , 
    skill : {},
}

type TeamLead = manager & employee ; //join 

