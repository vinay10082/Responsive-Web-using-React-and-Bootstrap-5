import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const signin = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.SignIn(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const resetPassword = (authData, navigate) => async (dispatch) => {
    try {
        const { data } =  await api.resetPassword(authData)
        dispatch({ type: 'AUTH', data})
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}