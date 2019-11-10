import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

pass = true; 
user = "";
password = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    if((this.user.toUpperCase()==='TEST1' && this.password === 'test1') || (this.user.toUpperCase() === 'BLAKEMORE' && this.password === 'Iamhere1')){
      this.router.navigate(['/form']);
    }else{
      this.pass = false;
    }
     
  }


}
