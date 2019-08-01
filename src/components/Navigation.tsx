import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

import { INavigationProps } from './modules/Navigation.module';
import Cart from './Cart/Cart';

export default (props: INavigationProps): JSX.Element => (
    <div className='nav'>
        <Link to='/' className='nav-link'>
            <h1>BOOK-STORE</h1>
        </Link>
        <Link to='/cart' className='nav-link'>
            <Cart
                totalQuantity={props.totalQuantity}
            />
        </Link>
    </div>
);
