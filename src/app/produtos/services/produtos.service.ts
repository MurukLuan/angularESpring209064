import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly recebidoAPI = 'api/produtos'
  constructor(private httpClient : HttpClient) { }

  list() {
    return this.httpClient.get<Produto[]>(this.recebidoAPI);
  }

  save(salvar: Produto){
    return this.httpClient.post<Produto>(this.recebidoAPI, salvar)
  }

}
