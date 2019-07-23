// actions
export type ActionTypes = {
    ADD_ITEM: string,
    DELETE_ITEM: string
}

export type CartActions = {
    addToCart(id: string): void,
    deleteFromCart(id: string): void
}

export type CartAction = {
    type: string,
    id: string
}

// reducers
export type initState = {
    items: object[],
    totalQuantity: number,
    quantityById: any
}