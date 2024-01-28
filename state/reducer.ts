import { ACTIONTYPE, IInitialState, UPDATE_HEADERS } from "./types";

export const initialState: IInitialState = { headers: {} };

export function commonReducer(
  state: IInitialState = initialState,
  action: ACTIONTYPE
) {
  switch (action.type) {
    case UPDATE_HEADERS:
      return {
        ...state,
        headers: action.headers,
      };
    default:
      return state;
  }
}
