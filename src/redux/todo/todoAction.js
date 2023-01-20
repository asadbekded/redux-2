import { ERROR, TODO, TODO_GET } from "./todoType"

export const todoAction = () => {
    return{
        type: TODO,
    }
}

export const todoGetAction = (users) => {
    return{
        type: TODO_GET,
        payload: users,
    }
}

export const todoErrorAction = (error) => {
    return{
        type: ERROR,
        payload: error,
    }
}