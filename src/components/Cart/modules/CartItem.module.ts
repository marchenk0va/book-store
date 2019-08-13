export type CartItemProps = {
    id: string,
    key: number,
    title: string,
    rating: number,
    cost: number,
    cover: string,
    removeFromCart: (id: string) => void,
    quantityOfItem: (id: string) => void,
}