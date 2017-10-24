import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ItemComponent } from './item/item.component';
import { ModalAlteraPrecoComponent } from './item/modal-altera-preco/modalAlteraPreco.component';

import { ItemService } from './services/item.service';
import { PedidoService } from './services/pedido.service';

import { routing } from './app.routes';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    ItemComponent,
    ModalAlteraPrecoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    HttpModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [ ModalAlteraPrecoComponent ],
  providers: [ ItemService, PedidoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
