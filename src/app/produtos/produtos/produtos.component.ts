import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[];
  displayedColumns = ['id', 'nome', 'categoria',
  'quantidade', 'preco_unitario'];
  constructor() {
    this.produtos = [{
      id: 1,
      nome: 'Celular',
      categoria: 'Celular',
      quantidade: 1,
      preco_unitario: 1000
    }];
  }

  ngOnInit(): void {
  }

}
