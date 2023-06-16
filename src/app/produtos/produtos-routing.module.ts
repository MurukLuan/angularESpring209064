import { ProdutoResolver } from './guarda-rota/produto.resolver';
import { FormularioDeProdutosComponent } from './formulario-de-produtos/formulario-de-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
    path:'', component: ProdutosComponent
},
{
  path:'novo', component: FormularioDeProdutosComponent, resolve:{produto: ProdutoResolver}
},
{
  path:'editar/:id', component: FormularioDeProdutosComponent, resolve:{produto: ProdutoResolver}
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
