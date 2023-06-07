import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly recebidoAPI = '../../../assets/produtos.json'
  constructor(private httpClient : HttpClient) { }

  list() {
    return this.httpClient.get<Produto[]>(this.recebidoAPI);
  }

}
