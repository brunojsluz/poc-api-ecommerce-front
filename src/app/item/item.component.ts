import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  private service: ItemService;

  constructor(service: ItemService) {
    this.service = service;
  }

  ngOnInit() {
  }

}
