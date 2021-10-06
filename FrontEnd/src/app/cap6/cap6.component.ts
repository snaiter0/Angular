import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cap6',
  templateUrl: './cap6.component.html',
  styleUrls: ['./cap6.component.css']
})
export class Cap6Component implements OnInit {

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
