import { IActionsTypes, ICartActions, ICartAction } from './modules/actions.module'

export const actionTypes: IActionsTypes = {
    ADD_ITEM: 'ADD_ITEM',
    DELETE_ITEM: 'DEELETE_ITEM',
}

const cartActions: ICartActions = {
    addToCart(id: string): ICartAction {
        return {
            type: actionTypes.ADD_ITEM,
            id
        }
    },

    deleteFromCart(id: string): ICartAction {
        return {
            type: actionTypes.DELETE_ITEM,
            id
        }
    },
}

export default cartActions
