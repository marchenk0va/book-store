export interface IActionsTypes {
    ADD_ITEM: string;
    REMOVE_ITEM: string;
}

export interface ICartAction {
    type: string;
    id: string;
}

export interface ICartActions {
    addToCart(id: string): void;
    removeFromCart(id: string): void;
}