import { SUCCESS_MSG, ERROR_MSG } from '../actions/types'

const initState = {
    successMessages: [],
    errorMessages: []
}

export default (state = initState, { type, payload }) => {
    switch (type) {
        case SUCCESS_MSG:
            const allSuccessMessages = state['successMessages']
            return {
                ...state,
                successMessages: [...allSuccessMessages, payload]
            }

        case ERROR_MSG:
            const allErrorMessages = state['errorMessages']
            return {
                ...state,
                errorMessages: [...allErrorMessages, payload]
            }

        default:
            return state
    }
}