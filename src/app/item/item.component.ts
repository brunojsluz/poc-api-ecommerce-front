import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../entidades/Item';
import { MatDialog } from '@angular/material';
import { ModalAlteraPrecoComponent } from './modal-altera-preco/modalAlteraPreco.component';
import {AlteraPreco} from '../entidades/AlteraPreco';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  private matDialog: MatDialog;
  private service: ItemService;
  private itens: Item[];

  constructor(service: ItemService, matDialog: MatDialog) {
    this.service = service;
    this.matDialog = matDialog;
  }

  ngOnInit() {
    this.listarTodosItens();
  }

  public abrirModal(item): void {
    const dialog = this.matDialog.open(ModalAlteraPrecoComponent, {
      width: '400px',
      data: {codigoItem: item.codigo}
    });

    dialog.afterClosed().subscribe(result => {
      console.log(result);
      this.atualizaPreco({codigoItem: result.codigoItem, valor: parseInt(result.preco)});
    });
  }

  private atualizaPreco(preco: AlteraPreco) {
    this.service.atualizarPreco(preco);
  }

  private listarTodosItens(): void {
    this.service.listar().subscribe(itens => this.itens = itens);
  }

}
