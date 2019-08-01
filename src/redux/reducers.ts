import { actionTypes } from './actions';
import { ICartState } from './modules/reducers.module';
import { ICartAction } from './modules/actions.module';

const initialState: ICartState = {
    items: [],
    totalQuantity: 0,
    quantityById: {}
}

export const itemActions = (state = initialState, action: ICartAction): ICartState => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                items: [ ...state.items, action.id ],
                totalQuantity: ++state.totalQuantity
            }
        default:
            return state
    }
}

export const quantityById = (state = initialState.quantityById, action: ICartAction) => {
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

export const getQuantityOfItem = (state: ICartState, id: string) => state.quantityById[id] || 0
