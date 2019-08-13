import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { books } from '../../data/data';
import { CartListProps } from './modules/CartList.module';
import CartItem from './CartItem';

const CartList: React.FC<CartListProps> = props => {
    const a = _.uniq(getAddedItems());
    const addedItems = a.map((item: any, index: number): JSX.Element => {
        return (
            <CartItem 
                id={item.id}
                key={index}
                title={item.title}
                rating={item.rating}
                cost={item.cost}
                cover={item.cover}
            />
        );
    });

    function getAddedItems() {
        let added: any = [];
        let addedIds = props.items;
        for (let id of addedIds) {
            let addedItemsArray = _.map(books, book => book.id === id ? book : undefined)
            let addedItem = _.without(addedItemsArray, undefined)
            added.push(...addedItem)
        }
        return added;
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0px', padding: '5px'}}>
            {
                props.items.length > 0 ? addedItems : <p>YOUR CART IS EMPTY</p>
            }
        </div>
    );
}

const mapStateToProps = (state: any): Object => ({
    items: state.cart.items,
});

export default connect(mapStateToProps, null)(CartList);

