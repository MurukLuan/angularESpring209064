import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Observable<Produto[]>;
  displayedColumns = ['id', 'nome', 'categoria',
  'quantidade', 'valor', 'actions'];
  //produtosService : ProdutosService;
  constructor(private produtosService : ProdutosService,
    private router : Router,
    private route : ActivatedRoute
    ) {
    //this.produtosService = new ProdutosService();
    this.produtos = this.produtosService.list();
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['novo'], {relativeTo : this.route})
  }

}
