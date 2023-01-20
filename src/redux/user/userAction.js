import { REMOVE_USER, SET_USER } from "./userType"


export const userAction = (users) => {
    return{
        type: SET_USER,
        payload: users,
    }
}

export const removeUser = () => {
    return{
        type: REMOVE_USER,
        payload: '',
    }
}