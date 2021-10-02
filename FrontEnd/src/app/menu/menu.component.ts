import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.usuario
  foto = environment.foto
  token = environment.token

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  sair()
  {
   this.router.navigate(['/entrar'])
   environment.token=''
   environment.usuario=''
   environment.foto=''
   environment.idUsuario= 0
  }
}
