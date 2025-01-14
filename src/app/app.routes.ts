import { Routes } from '@angular/router';
import path from 'path';
import { ListaDetalhesComponent } from './lista-detalhes/lista-detalhes.component';
import { ListaDeTarefasComponent } from './lista-de-tarefas/lista-de-tarefas.component';
import { FILE } from 'dns';
import { FiltroComponent } from './filtro/filtro.component';

export const routes: Routes = [
    {path:'listatarefas',title:'Lista De Tarefas', component:ListaDeTarefasComponent},
    {path:'listadetalhes', title:'lista De Detalhes', component:ListaDetalhesComponent},
    {path:'',redirectTo:'listatarefas',pathMatch:'full'}
];

