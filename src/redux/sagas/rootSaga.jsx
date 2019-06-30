import { takeLatest } from 'redux-saga/effects'
import { ATTEMP_LOGIN, REGISTER_USER } from '../actions/types'
import { loginWorker, RegisterUserWorker } from './authSagas'
import {
    GET_ALL_TICKETS, GET_USER_TICKETS,
    UPDATE_TICKET, DELETE_TICKET, MAKE_NEW_TICKET,
    SET_TICKET_ANSWER,
} from './../actions/types';
import {
    getAllTicketsWorker, getUserTicketsWorker,
    updateTicketWorker, deleteTicketWorker, makeNewTicketWorker, setTicketAnswerWorker
} from './ticketsSagas';


function* rootSaga() {
    yield takeLatest(ATTEMP_LOGIN, loginWorker)
    yield takeLatest(REGISTER_USER, RegisterUserWorker)

    yield takeLatest(GET_ALL_TICKETS, getAllTicketsWorker)
    yield takeLatest(GET_USER_TICKETS, getUserTicketsWorker)
    yield takeLatest(UPDATE_TICKET, updateTicketWorker)
    yield takeLatest(DELETE_TICKET, deleteTicketWorker)
    yield takeLatest(MAKE_NEW_TICKET, makeNewTicketWorker)
    yield takeLatest(SET_TICKET_ANSWER, setTicketAnswerWorker)
}

export default rootSaga



