import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { books } from '../../data/data';
import { IBooks } from '../../data/data';
import { CartListProps } from './module';
import CartItem from './CartItem';

const CartList = (props: CartListProps): JSX.Element => {
    const addedItems = getAddedItems();

    function getAddedItems() {
        let added: any = [];
        let addedIds = Object.keys(props.id);
        for (let id of addedIds) {
            let addedItemsArray = _.map(books, book => book.id === id ? book : undefined)
            let addedItem = _.without(addedItemsArray, undefined)
            added.push(...addedItem)
        }
        return added;
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '40%',margin: '0px', padding: '5px'}}>
            {
                addedItems.map((item: IBooks): JSX.Element => {
                    return (
                        <CartItem 
                            key={item.id}
                            title={item.title}
                            rating={item.rating}
                            cost={item.cost}
                            cover={item.cover}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state: any): Object => ({
    items: state.cart.items,
    id: state.quantityById
});

export default connect(mapStateToProps, null)(CartList);

