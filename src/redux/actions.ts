import { IActionsTypes, ICartActions, ICartAction } from './modules/actions.module'

export const actionTypes: IActionsTypes = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
}

const cartActions: ICartActions = {
    addToCart(id: string): ICartAction {
        return {
            type: actionTypes.ADD_ITEM,
            id
        }
    },

    removeFromCart(id: string): ICartAction {
        return {
            type: actionTypes.REMOVE_ITEM,
            id
        }
    },
}

export default cartActions
