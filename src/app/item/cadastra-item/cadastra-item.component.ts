import {Component} from '@angular/core';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'cadastro-item',
  templateUrl: 'cadastra-item.component.html'
})
export class CadastraItemComponent {

  private service: ItemService;

  constructor(service: ItemService) {
    this.service = service;
  }

}
