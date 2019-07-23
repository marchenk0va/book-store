import { ActionTypes, CartActions, CartAction } from './module'

export const actionTypes: ActionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    DELETE_ITEM: 'DEELETE_ITEM',
}

const cartActions: CartActions = {
    addToCart(id: string): CartAction {
        return {
            type: actionTypes.ADD_ITEM,
            id
        }
    },

    deleteFromCart(id: string): CartAction {
        return {
            type: actionTypes.DELETE_ITEM,
            id
        }
    },
}

export default cartActions
