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

  carregarPorId(id: number){
    return this.httpClient.get<Produto>(`${this.recebidoAPI}/${id}`);
  }

  save(salvar: Produto){
    if(salvar.id){
      return this.atualizar(salvar)
    }else{
      return this.criar(salvar)
    }
  }

  private criar(salvar: Partial<Produto>){
    return this.httpClient.post<Produto>(this.recebidoAPI, salvar)
  }
  private atualizar(salvar: Partial<Produto>){
    return this.httpClient.put<Produto>(`${this.recebidoAPI}/${salvar.id}`, salvar);
  }

}
