import { SET_TICKETS_DATA, NEW_TICKET_DATA } from "../actions/types";


export default (state = [], { type, payload }) => {
    switch (type) {
        case SET_TICKETS_DATA:
            return payload

        case NEW_TICKET_DATA:
            return [
                ...state,
                payload
            ]


        default:
            return state
    }
}