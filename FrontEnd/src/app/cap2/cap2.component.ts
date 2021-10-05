import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cap2',
  templateUrl: './cap2.component.html',
  styleUrls: ['./cap2.component.css']
})
export class Cap2Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token =='')
    this.router.navigate(['/entrar'])
  }

} 