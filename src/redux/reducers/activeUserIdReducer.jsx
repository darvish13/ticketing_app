import { SET_ACTIVE_USER_ID } from './../actions/types'

export default (state = null, { type, payload }) => {
    switch (type) {
        case SET_ACTIVE_USER_ID:
            return payload

        default:
            return state
    }
}