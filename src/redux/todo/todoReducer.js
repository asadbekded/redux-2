import { ERROR, TODO, TODO_GET } from "./todoType";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO:
      return {
        ...state,
        loading: true,
      };

    case TODO_GET: 
      return{
        ...state,
        loading: false,
        data: action.payload,
      }

    case ERROR:
        return{
            ...state,
            loading: false,
            data: [],
            error: true,
        }
    default: return state;
  }
};
