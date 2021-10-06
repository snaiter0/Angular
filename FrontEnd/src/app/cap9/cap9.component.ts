import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cap9',
  templateUrl: './cap9.component.html',
  styleUrls: ['./cap9.component.css']
})
export class Cap9Component implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token =='')
    this.router.navigate(['/entrar'])
  }

} 
