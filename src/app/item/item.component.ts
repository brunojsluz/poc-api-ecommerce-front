import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../entidades/Item';
import { MatDialog } from '@angular/material';
import { ModalAlteraPrecoComponent } from './modal-altera-preco/modal-altera-preco.component';
import { AlteraPreco } from '../entidades/AlteraPreco';
import { Message } from 'primeng/primeng';

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
  public aviso: Message[];

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
    }, error => {
       console.log(error.detalhes.valor);
       this.exibirNotificacao(error.detalhes.valor);
    });
  }

  private exibirNotificacao(mensagem: string) {
    this.aviso = [];
    this.aviso.push({severity: 'error', summary: 'Error Message', detail: mensagem});
  }

  private listarTodosItens(): void {
    this.service.listar().subscribe(itens => this.itens = itens);
  }

}
