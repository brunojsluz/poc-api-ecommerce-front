import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { PedidoComponent } from './pedido/pedido.component';

import { ItemService } from './services/item.service';
import { PedidoService } from './services/pedido.service';

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [ItemService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
