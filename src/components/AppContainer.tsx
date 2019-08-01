import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import ItemList from './ItemList';
import CartList from './Cart/CartList';
import { IAppProps, AppContainerState } from './modules/AppContainer.module';

const AppContainer: React.FC<IAppProps> = (props) => {
    const items = props.items;
    return (
        <BrowserRouter>
            <div>
                <Navigation
                    items={items.items}
                    totalQuantity={items.totalQuantity}
                />
                <Switch>
                    <Route exact path='/' component={ItemList} />
                    <Route path='/cart' component={CartList} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

const mapStateToProps = (state: AppContainerState) => ({
    items: state.cart
});

export default connect(mapStateToProps, null)(AppContainer);
