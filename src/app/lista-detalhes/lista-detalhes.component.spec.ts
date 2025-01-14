import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDetalhesComponent } from './lista-detalhes.component';

describe('ListaDetalhesComponent', () => {
  let component: ListaDetalhesComponent;
  let fixture: ComponentFixture<ListaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
