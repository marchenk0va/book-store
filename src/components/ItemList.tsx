import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import cartActions from '../redux/actions';
import Item from './Item';
import { books } from '../data/data';
import { IItemListProps } from './modules/ItemList.module';

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
`;

const ItemList: React.FC<IItemListProps> = (props) => {
    const items = books.map((book: any) => (
        <Item
            book={book} 
            key={book.id}
            addToCart={props.addToCart}
        />
    ));

    return (
        <Container>
            {items}
        </Container>
    )
};

const mapDispatchToProps = (dispatch: any) => ({
    addToCart: (id: string) => dispatch(cartActions.addToCart(id)),
});

export default connect(null, mapDispatchToProps)(ItemList);


