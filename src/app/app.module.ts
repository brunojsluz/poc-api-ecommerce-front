import { NgModule } from '@angular/core';
import { ItemModule } from './item/item.module';
import { PedidoModule } from './pedido/pedido.module';

import { AppComponent } from './app.component';

import { routing } from './app.routes';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    routing,
    ItemModule,
    PedidoModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
