import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cap1',
  templateUrl: './cap1.component.html',
  styleUrls: ['./cap1.component.css']
})
export class Cap1Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token =='')
    this.router.navigate(['/entrar'])
  }

} 
