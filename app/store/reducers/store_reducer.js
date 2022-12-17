import { GET_STORES } from "../types";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_STORES:
      return {
        ...state,
        ///
      };
    default:
      return state;
  }
}
