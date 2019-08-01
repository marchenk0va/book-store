export interface ICartState {
    items: string[],
    totalQuantity: number,
    quantityById: IQuantityById
}

export interface IQuantityById {
    [key: string]: number;
}