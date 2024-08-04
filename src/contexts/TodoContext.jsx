/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";
export const TodoContext = createContext({
    todoitems:[
        {
            id: 1,
            todo: 'Todo item',
            completed: false,
        }],
    addTodo : (todo) => {},
    updateTodo : (id, todo) =>{},
    deleteTodo : (id, todo) =>{},
    toggleComplete:(id) => {}
})
export const useTodo = () => {
    return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider