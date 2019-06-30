import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { history } from '../../react/history'
import { URL } from '../../env'
import { AUTH_INFO } from '../actions/types'
import { successMsg } from '../actions/alertMessageActions'

export function* loginWorker({ payload: { email, password } }) {

    const credentials = { email, password }

    try {
        const { data } = yield call(login, credentials)

        yield put({
            type: AUTH_INFO,
            payload: data
        })

        sessionStorage.setItem('authInfo', JSON.stringify(data))
        history.push('/')

    } catch (error) {
        console.log(error);
        alert('نام کاربری یا رمز عبور صحیح نمی باشد')
    }
}

function login(credentials) {
    return axios.post(`${URL}/api/login`, credentials)
}



export function* RegisterUserWorker({ payload }) {

    try {
        const { data } = yield call(registerUser, payload)
        console.log(data)
        yield put(successMsg('کاربر جدید با موفقیت ایجاد شد'))
        history.push('/login')

    } catch (error) {
        alert('این نام کاربری قبلا ثبت شده است')
        console.log(error);
    }
}

function registerUser(values) {
    return axios({
        url: `${URL}/api/register`,
        method: 'POST',
        data: values,
    })
}