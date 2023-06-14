import { FormularioDeProdutosComponent } from './formulario-de-produtos/formulario-de-produtos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
    path:'', component: ProdutosComponent
},
{
  path:'novo', component: FormularioDeProdutosComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
