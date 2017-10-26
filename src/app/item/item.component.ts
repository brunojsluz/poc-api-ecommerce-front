import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../entidades/Item';
import { MatDialog } from '@angular/material';
import { ModalAlteraPrecoComponent } from './modal-altera-preco/modalAlteraPreco.component';
import {AlteraPreco} from '../entidades/AlteraPreco';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  private matDialog: MatDialog;
  private service: ItemService;
  public itens: Item[];
  public descricaoParcial: string;

  constructor(service: ItemService, matDialog: MatDialog) {
    this.service = service;
    this.matDialog = matDialog;
  }

  ngOnInit() {
    this.listarTodosItens();
  }

  public pesquisar() {
    this.service.buscarParcial(this.descricaoParcial).subscribe(itens => this.itens = itens);
  }

  public abrirModal(item): void {
    const dialog = this.matDialog.open(ModalAlteraPrecoComponent, {
      width: '400px',
      data: {codigoItem: item.codigo}
    });

    dialog.afterClosed().subscribe(result => {
      this.atualizaPreco(result);
    });
  }

  private atualizaPreco(result: any) {
    const alteraPreco = new AlteraPreco();
    alteraPreco.codigoItem = result.codigoItem;
    alteraPreco.valor = parseFloat(result.preco);
    this.service.atualizarPreco(alteraPreco).subscribe(res => {
      console.log(res);
      this.listarTodosItens();
    });
  }

  private listarTodosItens(): void {
    this.service.listar().subscribe(itens => this.itens = itens);
  }

}
