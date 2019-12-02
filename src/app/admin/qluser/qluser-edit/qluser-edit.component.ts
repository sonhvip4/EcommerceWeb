import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qluser-edit',
  templateUrl: './qluser-edit.component.html',
  styleUrls: ['./qluser-edit.component.css']
})
export class QluserEditComponent implements OnInit {

  public email : string;
  public password:string;
  public name: string;
  public image: string;
  public address:string;
  public phone:string;
  public type:string;

  constructor() { }

  ngOnInit() {

    
  }

}
