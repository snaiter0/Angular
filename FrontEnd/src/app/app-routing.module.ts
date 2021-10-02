import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { Cap1Component } from './cap1/cap1.component';
import { Cap2Component } from './cap2/cap2.component';
import { Cap3Component } from './cap3/cap3.component';
import { Cap4Component } from './cap4/cap4.component';
import { Cap5Component } from './cap5/cap5.component';
import { Cap6Component } from './cap6/cap6.component';
import { Cap7Component } from './cap7/cap7.component';
import { Cap8Component } from './cap8/cap8.component';
import { Cap9Component } from './cap9/cap9.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { Tema } from './model/Tema';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  {path:'', redirectTo:'entrar', pathMatch:'full'},
  {path:'cap1',component:Cap1Component},
  {path:'cap2',component:Cap2Component},
  {path:'cap3',component:Cap3Component},
  {path:'cap4',component:Cap4Component},
  {path:'cap5',component:Cap5Component},
  {path:'cap6',component:Cap6Component},
  {path:'cap7',component:Cap7Component},
  {path:'cap8',component:Cap8Component},
  {path:'cap9',component:Cap9Component},
  {path:'entrar',component:EntrarComponent},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'inicio', component:InicioComponent},
  {path:'tema',component:TemaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
