import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ItemComponent } from './item.component';
import { CadastraItemComponent } from './cadastra-item/cadastra-item.component';

const ITEM_ROUTES: Routes = [
  { path: 'item', component: ItemComponent },
  { path: 'item/cadastro', component: CadastraItemComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(ITEM_ROUTES) ],
  exports: [ RouterModule ]
})
export class ItemRoutingModule {

}
