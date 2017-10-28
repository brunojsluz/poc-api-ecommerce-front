import { NgModule } from '@angular/core';

import { CadastraItemComponent } from './cadastra-item/cadastra-item.component';
import { ModalAlteraPrecoComponent } from './modal-altera-preco/modal-altera-preco.component';
import { ItemComponent } from './item.component';

import { SharedModule } from '../shared/shared.module';

import { ItemService } from '../services/item.service';
import { ItemRoutingModule } from './item.routing.module';


@NgModule({
  declarations: [
    ItemComponent,
    CadastraItemComponent,
    ModalAlteraPrecoComponent
  ],

  imports: [
    SharedModule,
    ItemRoutingModule
  ],

  exports: [
    ItemComponent
  ],

  entryComponents: [
    ModalAlteraPrecoComponent
  ],

  providers: [ ItemService ]
})
export class ItemModule {

}
