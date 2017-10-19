import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class PedidoService {
  private http: Http;
  private headers: Headers = new Headers();

  private urlServico: string = 'http://localhost/pedido';

  public constructor(http: Http) {
    this.http = http;
    this.headers.append('Content-Type', 'application/json');
  }

  public salvar(): void {

  }

  public buscar(): void {

  }

  public listar(): void {

  }

  public fecharPedido(): void {

  }

}
