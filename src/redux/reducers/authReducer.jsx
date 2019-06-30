import { AUTH_INFO } from '../actions/types'

const authReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case AUTH_INFO:
            return payload

        default:
            return state
    }
}

export default authReducer