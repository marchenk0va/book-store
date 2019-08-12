import React from 'react';
import '../../App.scss';
import { connect } from 'react-redux';
import { CartItemProps } from './modules/CartItem.module';
import cartActions from '../../redux/actions';

const CartItem: React.FC<CartItemProps> = props => {
    return (
        <div className='cart-item-container flex-row'>
            <div className='flex-row' style={{marginRight: '40px'}}>
                <div style={{margin: '10px 20px'}}>
                    <img src={props.cover} alt='book cover' className='cart-item-cover'/>
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.rating}/5</p>
                    <p>{props.cost} $</p>
                </div>
            </div>
            <div>
                <p>quantity x </p>
                <h3>total price</h3>
                <button onClick={() => props.removeFromCart(props.id)}>REMOVE</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state: any) => ({
    quantity: state.quantityById
});

const mapDispatchToProps = (dispatch: any) => ({
    removeFromCart: (id: string) => dispatch(cartActions.removeFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);