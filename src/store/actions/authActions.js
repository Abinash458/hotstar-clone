import { LOGIN } from "../actionTypes";

export const googleSignIn = (result) => async (dispatch) => {
    try {
        const { name, email, photo, history } = result
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