import { SUCCESS_MSG, ERROR_MSG } from './types'

export const successMsg = (text) => ({
    type: SUCCESS_MSG,
    payload: text
})

export const errorMsg = (text) => ({
    type: ERROR_MSG,
    payload: text
})