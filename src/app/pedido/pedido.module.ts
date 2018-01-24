import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PedidoRoutingModule } from './pedido.routing.module';

import { PedidoComponent } from './pedido.component';
import { CadastraPedidoComponent } from './novo-pedido/cadastra-pedido.component';

import { PedidoService } from '../services/pedido.service';

@NgModule({
  declarations: [
    PedidoComponent,
    CadastraPedidoComponent
  ],

  imports: [
    SharedModule,
    PedidoRoutingModule
  ],

  exports: [
    PedidoComponent
  ],

  providers: [
    PedidoService
  ]
})
export class PedidoModule {

}
