import {Component, OnInit} from '@angular/core';
import {PedidoService} from '../services/pedido.service';
import {Pedido} from '../entidades/Pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent implements OnInit {

  private service: PedidoService;
  public pedidos: Pedido[];

  public constructor(service: PedidoService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.listarTodosPedidos();
  }

  private listarTodosPedidos(): void {
    this.service.listar().subscribe(pedidos => this.pedidos = pedidos);
  }
}
