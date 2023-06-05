import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  list() : Produto[]{
    return[
      {
        id: 1,
        nome: 'Celular',
        categoria: 'Celular',
        quantidade: 1,
        preco_unitario: 1000
      },
      {
        id: 2,
        nome: 'CPU intel',
        categoria: 'Informatica',
        quantidade: 10,
        preco_unitario: 899.99
      }
    ]
  }

}
