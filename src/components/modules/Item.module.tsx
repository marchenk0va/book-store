import { IBooks } from '../../data/data';

export interface IItemProps {
    book: IBooks;
    addToCart(id: string): void;
}