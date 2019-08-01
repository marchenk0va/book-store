import React from 'react';
import styled from 'styled-components';
import { IItemProps } from './modules/Item.module';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 20%;
    margin: 10px;
`;

const AddBtn = styled.button`
    background-color: #6DDAF0;
    border: none;
    border-radius: 3px;

    &:hover {
        background-color: #73E7FF;
    }
`;

export default (props: IItemProps): JSX.Element => {
    const book = props.book;
    return (
        <Container>
            <div style={{margin: '16px 10px', fontSize: '14px'}}>
                <img src={book.cover} alt='cover' style={{width: '90px', height: '120px'}}/>
                <p>Rating: {book.rating}/5</p>
                <p>Cost: {book.cost}$</p>
            </div>
            <div>
                <div>
                    <h3>{book.title}</h3>
                    <AddBtn onClick={() => props.addToCart(book.id)}>
                        ADD TO CART
                    </AddBtn>
                </div>
            </div>
        </Container>
    )
};
