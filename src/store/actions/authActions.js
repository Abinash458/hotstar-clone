import { LOGIN, LOGOUT } from "../actionTypes";

export const googleSignIn = (result) => async (dispatch) => {
    try {
        const { name, email, photo } = result
        dispatch({
            type: LOGIN, 
            payload: {
                name: name, 
                email: email, 
                photo: photo
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export const googleSignOut = () => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT })
    } catch (error) {
        console.log(error);
    }
}