
import * as types from '../types/index'

export const initialState = {
    todo: ""
}

export interface ActionType {
    type: string,
    payload: string
}

export const reducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case types.CHANGE_INPUT_TODO:
            return {
                ...state,
                todo: action.payload
            }
        default:
            return state
    }
}