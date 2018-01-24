import { Component, OnInit } from '@angular/core';

import { Pedido } from '../../entidades/Pedido';

@Component({
    selector: 'cadastra-pedido',
    templateUrl: 'cadastra-pedido.component.html'
})
export class CadastraPedidoComponent implements OnInit {

    public pedido: Pedido = new Pedido();

    constructor() { }

    ngOnInit() { }
}
