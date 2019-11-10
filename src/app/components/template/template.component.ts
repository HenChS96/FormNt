import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  fname = '';
  lname = '';
  mail = '';
  country = '';
  pnumber = '';

  savedData: any[] = [];

  constructor() { }

  ngOnInit() {
  }


  
  save(){
    this.savedData.push(this.fname,this.lname,this.mail,this.country,this.pnumber);
    console.log(this.savedData)
  }

}
