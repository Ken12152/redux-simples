import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from './actionTypes'

export function alterarNumeroMin(newValue) {
    return {
        type: NUM_MIN_ALTERADO,
        payload: newValue
    }
}

export function alterarNumeroMax(newValue) {
    return {
        type: NUM_MAX_ALTERADO,
        payload: newValue
    }
}
