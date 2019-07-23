import React from 'react';
import styled from 'styled-components';

import cart from '../../assets/images/cart.png';

const Cart = styled.div`
    display: flex;
    align-items: center;
    margin-right: 40px;
`;

export default ({totalQuantity}: any): JSX.Element => {
    return (
        <Cart>
            <img style={{width: '50px', height: '50px'}}
                src={cart}
                alt='cart' />
            <span>{totalQuantity}</span>
        </Cart>
    )
};
