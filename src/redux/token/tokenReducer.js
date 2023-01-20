import { REMOVE_TOKEN, TOKEN } from "./tokenType";

const tokenState = {
  token: "",
};

export const tokenReducer = (state = tokenState, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case REMOVE_TOKEN:
      return {
        ...state,
        token: action.payload,
      }
    default:
      return state;
  }
};
