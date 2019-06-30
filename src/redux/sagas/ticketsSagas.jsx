import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { URL } from '../../env'
import { successMsg } from '../actions/alertMessageActions';
import { setTicketsData, newTicketData } from '../actions/ticketActions';

export function* getAllTicketsWorker({ payload }) {

    try {
        const { data } = yield call(getAllTickets, payload)
        yield put(setTicketsData(data))

    } catch (error) {
        console.log(error)
    }
}

function getAllTickets(token) {
    return axios({
        url: `${URL}/api/tickets`,
        method: 'get',
        headers: { 'Authorization': 'bearer ' + token }
    })
}


export function* getUserTicketsWorker({ payload }) {

    try {
        const { data } = yield call(getUserTickets, payload)
        yield put(setTicketsData(data))

    } catch (error) {
        console.log(error)
    }
}

function getUserTickets(token) {
    return axios({
        url: `${URL}/api/user-tickets`,
        method: 'get',
        headers: { 'Authorization': 'bearer ' + token }
    })
}


export function* updateTicketWorker({ payload: { values, token } }) {

    const { id, status } = values
    const updateData = { id, status }
    try {
        const { data } = yield call(updateTicket, updateData, token)
        yield put(successMsg('تیکت شما با موفقیت به روز رسانی شد'))
        yield put(setTicketsData(data))

    } catch (error) {
        console.log(error)
    }
}

function updateTicket(updateData, token) {
    return axios({
        url: `${URL}/api/tickets`,
        method: 'PUT',
        data: updateData,
        headers: { 'Authorization': 'bearer ' + token }
    })
}


export function* deleteTicketWorker({ payload: { id, token } }) {

    try {
        const { data } = yield call(deleteTicket, id, token)
        yield put(successMsg('تیکت شما با موفقیت حذف شد'))
        yield put(setTicketsData(data))

    } catch (error) {
        console.log(error)
    }
}

function deleteTicket(id, token) {
    return axios({
        url: `${URL}/api/tickets`,
        method: 'delete',
        data: { id },
        headers: { 'Authorization': 'bearer ' + token }
    })
}


export function* makeNewTicketWorker({ payload: { values, token } }) {

    try {
        const { data } = yield call(makeNewTicket, values, token)
        yield put(successMsg('تیکت شما با موفقیت ایجاد شد'))
        yield put(newTicketData(data))

    } catch (error) {
        console.log(error)
    }
}

function makeNewTicket(values, token) {
    return axios({
        url: `${URL}/api/tickets`,
        method: 'post',
        data: values,
        headers: { 'Authorization': 'bearer ' + token }
    })
}


export function* setTicketAnswerWorker({ payload: { values, token } }) {
    
    try {
        const { data } = yield call(setTicketAnswer, values, token)
        yield put(successMsg('پاسخ شما با موفقیت ثبت شد'))
        yield put(setTicketsData(data))

    } catch (error) {
        console.log(error)
    }
}

function setTicketAnswer(values, token) {
    return axios({
        url: `${URL}/api/answer-ticket`,
        method: 'post',
        data: values,
        headers: { 'Authorization': 'bearer ' + token }
    })
}