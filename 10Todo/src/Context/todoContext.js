import { createContext,useContext } from "react";
export const TodoContext = createContext({
    //properties
    todos:[
        {
            id:1,
            todo:"Todo msg",
            complete: false,
        }
    ],
    // functionalities
    addTodo:(todo) =>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleTodo : (id)=>{}  // toggleComplete

})
export const useTodo=()=>{
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider