import React from 'react';
import styled from 'styled-components';

import cart from '../../assets/images/cart.png';
import { ICartProps } from './modules/Cart.module';

const Cart = styled.div`
    display: flex;
    align-items: center;
    margin-right: 40px;
`;

export default ({totalQuantity}: ICartProps): JSX.Element => (
    <Cart>
        <img style={{width: '50px', height: '50px'}}
            src={cart}
            alt='cart' />
        <span>{totalQuantity}</span>
    </Cart>
);
