import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ItemService {
  private http: Http;
  private headers: Headers = new Headers();

  private urlServico: string = 'http://localhost/item';

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

  public atualizarPreco(): void {

  }
}
