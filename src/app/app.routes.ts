import { RouterModule, Routes } from '@angular/router';
import {ItemComponent} from './item/item.component';
import {PedidoComponent} from './pedido/pedido.component';

const appRoutes: Routes = [
    { path: '', component: ItemComponent },
    { path: 'pedido', component: PedidoComponent },
    { path: '**', component: ItemComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
