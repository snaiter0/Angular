import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { Cap1Component } from './cap1/cap1.component';
import { Cap2Component } from './cap2/cap2.component';
import { Cap3Component } from './cap3/cap3.component';
import { Cap4Component } from './cap4/cap4.component';
import { Cap5Component } from './cap5/cap5.component';
import { Cap6Component } from './cap6/cap6.component';
import { Cap7Component } from './cap7/cap7.component';
import { Cap8Component } from './cap8/cap8.component';
import { Cap9Component } from './cap9/cap9.component';
import { BarraDeNavegacaoComponent } from './Carousel/barra-de-navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    HomeComponent,
    Cap1Component,
    Cap2Component,
    Cap3Component,
    Cap4Component,
    Cap5Component,
    Cap6Component,
    Cap7Component,
    Cap8Component,
    Cap9Component,
    BarraDeNavegacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
