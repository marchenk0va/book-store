import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import cartActions from '../redux/actions';
import Item from './Item';
import { books } from '../data/data';

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
`;

const ItemList = (props: any): JSX.Element => {
    return (
        <Container>
            {
                books.map((book: any) => (
                    <Item
                        book={book} 
                        key={book.id}
                        addToCart={props.addToCart}
                    />
                ))
            }
        </Container>
    )
};

const mapDispatchToProps = (dispatch: any): Object => ({
    addToCart: (id: string) => dispatch(cartActions.addToCart(id)),
});

export default connect(null, mapDispatchToProps)(ItemList);


