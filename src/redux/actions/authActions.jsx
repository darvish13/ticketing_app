import { AUTH_INFO, ATTEMP_LOGIN, REGISTER_USER } from './types'

export const attempLogin = (values) => {
    return {
        type: ATTEMP_LOGIN,
        payload: values
    }
}

export const setAuthInfo = (authInfo) => {
    return {
        type: AUTH_INFO,
        payload: authInfo
    }
}

export const registerUser = (values) => {
    return {
        type: REGISTER_USER,
        payload: values
    }
}
