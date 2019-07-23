import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import ItemList from './ItemList';
import CartList from './Cart/CartList';

function AppContainer(props: any): JSX.Element {
    return (
        <BrowserRouter>
            <div>
                <Navigation
                    items={props.items.items}
                    totalQuantity={props.items.totalQuantity}
                />
                <Switch>
                    <Route exact path='/' component={ItemList} />
                    <Route path='/cart' component={CartList} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

const mapStateToProps = (state: any) => ({
    items: state.cart
});

export default connect(mapStateToProps, null)(AppContainer);
