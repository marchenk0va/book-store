import { actionTypes } from './actions';
import { initState, CartAction } from './module';

const initialState: initState = {
    items: [],
    totalQuantity: 0,
    quantityById: {}
}

export const itemActions = (state = initialState, action: CartAction): any => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return {
                ...state.items,
                items: [ ...state.items, action.id ],
                totalQuantity: ++state.totalQuantity
            }
        default:
            return state
    }
}

export const quantityById = (state = initialState.quantityById, action: any) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                [action.id]: (state[action.id] || 0) + 1
            }
        default:
            return state
    }
}

export const getQuantityOfItem = (state: any, id: any) => state.quantityById[id] || 0
