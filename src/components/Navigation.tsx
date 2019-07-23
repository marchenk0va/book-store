import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

import { NavigationProps } from './Navigation.module';
import Cart from './Cart/Cart';

export default (props: NavigationProps): JSX.Element => {
    return (
        <div className='nav'>
            <Link to='/' className='nav-link'>
                <h1>BOOK-STORE</h1>
            </Link>
            <Link to='/cart' className='nav-link'>
                <Cart 
                    items={props.items}
                    totalQuantity={props.totalQuantity}
                />
            </Link>
        </div>
    )
};
