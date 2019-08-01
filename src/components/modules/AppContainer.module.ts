import { ICartState } from '../../redux/modules/reducers.module';

export interface IAppProps {
    items: ICartState;
}

export type AppContainerState = {
    cart: ICartState
}
