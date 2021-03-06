import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ItemRoutingModule } from './item.routing.module';

import { CadastraItemComponent } from './cadastra-item/cadastra-item.component';
import { ModalAlteraPrecoComponent } from './modal-altera-preco/modal-altera-preco.component';
import { ItemComponent } from './item.component';

import { ItemService } from '../services/item.service';


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
