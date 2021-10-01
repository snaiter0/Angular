import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User;
  UserLogin: UserLogin = new UserLogin
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.user.tipo=this.tipoUsuario
    if(this.user.senha != this.confirmarSenha){
      alert('As senhas estão distintas!')
      this.router.navigate(['/entrar'])
    }else{
      this.authService.cadastrar(this.user).subscribe((resp: User)=> {
        this.user=resp
        this.router.navigate(['/entrar'])
        alert('Cadastro efetuado com sucesso!')
      })
    }
  }
}
