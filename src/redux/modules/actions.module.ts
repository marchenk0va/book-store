export interface IActionsTypes {
    ADD_ITEM: string;
    DELETE_ITEM: string;
}

export interface ICartAction {
    type: string;
    id: string;
}

export interface ICartActions {
    addToCart(id: string): void;
    deleteFromCart(id: string): void;
}