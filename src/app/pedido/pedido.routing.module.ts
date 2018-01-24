import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedidoComponent } from './pedido.component';
import { CadastraPedidoComponent } from './novo-pedido/cadastra-pedido.component';

const PEDIDO_ROUTES: Routes = [
  { path: 'pedido', component: PedidoComponent },
  { path: 'pedido/cadastro', component: CadastraPedidoComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(PEDIDO_ROUTES) ],
  exports: [ RouterModule ]
})
export class PedidoRoutingModule {

}
