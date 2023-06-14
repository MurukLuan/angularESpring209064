import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeProdutosComponent } from './formulario-de-produtos.component';

describe('FormularioDeProdutosComponent', () => {
  let component: FormularioDeProdutosComponent;
  let fixture: ComponentFixture<FormularioDeProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDeProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDeProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
