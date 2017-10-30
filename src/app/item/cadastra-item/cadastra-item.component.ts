import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../entidades/Item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cadastro-item',
  templateUrl: 'cadastra-item.component.html'
})
export class CadastraItemComponent {

  private service: ItemService;
  private route: ActivatedRoute;
  public item: Item = new Item();

  constructor(service: ItemService, route: ActivatedRoute) {
    this.service = service;
    this.route = route;
  }

  public salvarItem(event): void {
    event.preventDefault();

    this.service.salvar(this.item).subscribe(res => {
      this.resolveCadastroSucesso(res);
    });
  }

  private resolveCadastroSucesso(res): void {
    console.log(res);
    this.item = new Item();
  }

}
