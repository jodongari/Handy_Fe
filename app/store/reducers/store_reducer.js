import { GET_STORES, REGISTER_STORE } from "../types";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_STORES:
      return {
        ...state,
        documents: action.payload || false,
      };
    case REGISTER_STORE:
      return {
        ...state,
        documents: action.payload || false,
      };
    default:
      return state;
  }
}
