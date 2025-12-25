// typescript code that take todo's as an input and renders them 

interface TodoType {
    title : string , 
    description : string , 
    done : boolean
}
interface TodoInput {
    todo : TodoType
}
function Todo (props : TodoInput) {
    return (
        <div>
            <h2>{props.todo.title}</h2>
            <p>{props.todo.description}</p>
            <p>Done: {props.todo.done ? 'true' : 'false'}</p>
        </div>
    )
}
<Todo todo ={{
    title : "Go To Gym",
    description : "8-10PM",
    done : true
}} />