import { Component } from '@angular/core';
import { ListaDetalhesComponent } from "../lista-detalhes/lista-detalhes.component";
import { FiltroComponent } from "../filtro/filtro.component";

@Component({
  selector: 'app-lista-de-tarefas',
  standalone: true,
  imports: [ListaDetalhesComponent, FiltroComponent],
  templateUrl: './lista-de-tarefas.component.html',
  styleUrl: './lista-de-tarefas.component.css'
})
export class ListaDeTarefasComponent {

}
