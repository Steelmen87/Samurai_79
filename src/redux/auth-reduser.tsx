import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    /* isFetching: false,*/

}

export type InitialState = typeof initialState

const authReducer = (state: InitialState = initialState, action: any): InitialState => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default :
            return state;
    }
}

export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, login, email}
})
export  const getAuth = () =>{
    return (dispatch) => {
        usersAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}

export default authReducer;