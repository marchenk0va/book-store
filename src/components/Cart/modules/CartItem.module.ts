export type CartItemProps = {
    id: string,
    key: string,
    title: string,
    rating: number,
    cost: number,
    cover: string,
    quantity: any,
    removeFromCart: (id: string) => void,
}