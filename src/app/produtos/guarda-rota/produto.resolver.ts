import { Produto } from './../model/produto';
import { ProdutosService } from './../services/produtos.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  RouterLinkActive
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoResolver implements Resolve<Produto> {

  constructor(private servico: ProdutosService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produto> {
    if(route.params && route.params['id']){
      return this.servico.carregarPorId(route.params['id']);
    }
    return of({id: 0, nome: '', categoria: '', quantidade: 0, valor: 0});
  }
}
