import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedidoComponent } from './pedido.component';

const PEDIDO_ROUTES: Routes = [
  { path: 'pedido', component: PedidoComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(PEDIDO_ROUTES) ],
  exports: [ RouterModule ]
})
export class PedidoRoutingModule {

}
