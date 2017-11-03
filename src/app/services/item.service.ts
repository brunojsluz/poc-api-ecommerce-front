import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Item} from '../entidades/Item';
import {Observable} from 'rxjs/Observable';
import {AlteraPreco} from '../entidades/AlteraPreco';
import {environment} from '../../environments/environment';

@Injectable()
export class ItemService {
  private http: Http;
  private headers: Headers = new Headers();

  private urlAPI: string = `${environment.urlAPI}/item`;

  public constructor(http: Http) {
    this.http = http;
    this.headers.append('Content-Type', 'application/json');
  }

  public salvar(item: Item): Observable<string> {
    return this.http.post(this.urlAPI, item, this.montarHeaders())
                .map(() => 'Item salvo com sucesso.');
  }

  public buscar(codigo: string): Observable<Item> {
    return this.http.get(`${this.urlAPI}/busca/${codigo}`).map(res => res.json());
  }

  public buscarParcial(descricao: string): Observable<Item[]> {
    return this.http.get(`${this.urlAPI}/busca/parcial?descricao=${descricao}`)
      .map(res => res.json());
  }

  public listar(): Observable<Item[]> {
    return this.http.get(this.urlAPI).map(res => res.json());
  }

  public atualizarPreco(alteraPreco: AlteraPreco): Observable<string> {
    return this.http.post(`${this.urlAPI}/altera/preco`, alteraPreco, this.montarHeaders())
      .map(() => 'Preço atualizado com sucesso.')
      .catch(this.errorLog);
  }

  private errorLog(error: Response | any) {
    return Observable.throw(error.json());
  }

  private montarHeaders(): any {
    return { headers: this.headers };
  }
}
