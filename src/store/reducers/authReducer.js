import { LOGIN, LOGOUT } from "../actionTypes";

export const authReducer = (state = { authData : null }, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                authData: action?.payload
            }
        case LOGOUT:
            return {
                ...state,
                authData: null
            }
        default:
            return state;
    }
}