import { REMOVE_TOKEN, TOKEN } from "./tokenType"


export const tokenAction = (token) => {
    return{
        type: TOKEN,
        payload: token,
    }
}

export const removeToken = () => {
    return{
        type: REMOVE_TOKEN,
        payload: '',
    }
}