import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Item} from '../entidades/Item';
import {Observable} from 'rxjs/Observable';
import {AlteraPreco} from '../entidades/AlteraPreco';

@Injectable()
export class ItemService {
  private http: Http;
  private headers: Headers = new Headers();

  private urlServico: string = 'http://localhost/item';

  public constructor(http: Http) {
    this.http = http;
    this.headers.append('Content-Type', 'application/json');
  }

  public salvar(item: Item): Observable<string> {
    return this.http.post(this.urlServico, item, this.montarHeaders())
                .map(() => 'Item salvo com sucesso.');
  }

  public buscar(codigo: string): Observable<Item> {
    return this.http.get(this.urlServico + '/busca/' + codigo).map(res => res.json());
  }

  public buscarParcial(descricao: string): Observable<Item> {
    return this.http.get(this.urlServico + '/busca/parcial/' + descricao).map(res => res.json());
  }

  public listar(): Observable<Item> {
    return this.http.get(this.urlServico).map(res => res.json());
  }

  public atualizarPreco(alteraPreco: AlteraPreco): Observable<string> {
    return this.http.post(this.urlServico + '/altera/preco', alteraPreco, this.montarHeaders())
                .map(() => 'Preço atualizado com sucesso.');
  }

  private montarHeaders(): any {
    return { headers: this.headers };
  }
}
