import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item} from "../entidades/Item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  private service: ItemService;
  private itens: Item[];

  constructor(service: ItemService) {
    this.service = service;
  }

  ngOnInit() {
    this.listarTodosItens();
  }

  private listarTodosItens(): void {
    this.service.listar().subscribe(itens => this.itens = itens);
  }

}
