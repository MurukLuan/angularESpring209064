import { ProdutosService } from './../services/produtos.service';
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
  produtosService : ProdutosService;
  constructor() {
    this.produtosService = new ProdutosService();
    this.produtos = this.produtosService.list();
  }

  ngOnInit(): void {
  }

}
