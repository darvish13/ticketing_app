import {
    GET_USER_TICKETS, GET_ALL_TICKETS,
    SET_TICKETS_DATA, UPDATE_TICKET, DELETE_TICKET,
    NEW_TICKET_DATA, MAKE_NEW_TICKET, SET_TICKET_ANSWER
} from "./types";


export const getAllTickets = (token) => ({
    type: GET_ALL_TICKETS,
    payload: token
})


export const getUserTickets = (token) => ({
    type: GET_USER_TICKETS,
    payload: token
})


export const setTicketsData = (tickets) => ({
    type: SET_TICKETS_DATA,
    payload: tickets
})

export const updateTicket = (values, token) => ({
    type: UPDATE_TICKET,
    payload: {
        values,
        token
    }
})

export const deleteTicket = (id, token) => ({
    type: DELETE_TICKET,
    payload: {
        id,
        token
    }
})

export const makeNewTicket = (values, token) => ({
    type: MAKE_NEW_TICKET,
    payload: {
        values,
        token
    }
})


export const newTicketData = (ticket) => ({
    type: NEW_TICKET_DATA,
    payload: ticket,
})

export const setTicketAnswer = (values, token) => ({
    type: SET_TICKET_ANSWER,
    payload: {
        values,
        token
    }
})

