import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Pedido} from '../entidades/Pedido';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class PedidoService {
  private http: Http;
  private headers: Headers = new Headers();

  private urlAPI: string = `${environment.urlAPI}/pedido`;

  public constructor(http: Http) {
    this.http = http;
    this.headers.append('Content-Type', 'application/json');
  }

  public salvar(pedido: Pedido):  Observable<string> {
    return this.http.post(this.urlAPI, pedido, this.montarHeaders())
                .map(() => 'Item salvo com sucesso.');
  }

  public buscar(codigo: string): Observable<Pedido> {
    return this.http.get(`${this.urlAPI}/busca/${codigo}`).map(res => res.json());
  }

  public listar(): Observable<Pedido[]> {
    return this.http.get(this.urlAPI).map(res => res.json());
  }

  public fecharPedido(codigo: string): void {
    this.http.put(`${this.urlAPI}/fecha/${codigo}`, this.montarHeaders())
              .map(() => 'Pedido fechado com sucesso.');
  }

  private montarHeaders(): any {
    return { headers: this.headers };
  }

}
