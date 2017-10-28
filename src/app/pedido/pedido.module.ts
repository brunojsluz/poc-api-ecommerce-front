import {NgModule} from '@angular/core';
import {PedidoComponent} from './pedido.component';
import {SharedModule} from '../shared/shared.module';
import {PedidoService} from '../services/pedido.service';

@NgModule({
  declarations: [
    PedidoComponent
  ],

  imports: [
    SharedModule
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
