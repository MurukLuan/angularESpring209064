import { Produto } from './../model/produto';
import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-de-produtos',
  templateUrl: './formulario-de-produtos.component.html',
  styleUrls: ['./formulario-de-produtos.component.scss']
})
export class FormularioDeProdutosComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private servico : ProdutosService,
    private snackBar : MatSnackBar,
    private local : Location,
    private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      id:[null],
      nome:[null],
      categoria: [null],
      quantidade: [null],
      valor: [null]
    });
   }

  ngOnInit(): void {
    const produto: Produto = this.route.snapshot.data['produto'];
    this.form.setValue({
      id: produto.id,
      nome: produto.nome,
      categoria: produto.categoria,
      quantidade: produto.quantidade,
      valor: produto.valor
    })
  }

  onSubmit(){
    this.servico.save(this.form.value)
    .subscribe(resultado => this.msgSucesso(),
       error => this.msgErro())
  }

  onCancel(){
    this.local.back();
  }

  private msgSucesso(){
    this.snackBar.open('Produto salvo com sucesso', '', {duration: 3000})
    this.onCancel();
  }

  private msgErro(){
    this.snackBar.open('Não foi possivel salvar o produto', '', {duration: 3000})
  }
}
