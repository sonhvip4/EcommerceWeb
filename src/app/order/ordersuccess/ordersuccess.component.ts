import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ordersuccess',
  templateUrl: './ordersuccess.component.html',
  styleUrls: ['./ordersuccess.component.css']
})
export class OrdersuccessComponent implements OnInit {

  constructor(private api: ApiService,private router: Router) { } 
  ngOnInit() {
    this.orderproduct();
  }
  orderproduct() {
    this.api.orderproduct()
    .subscribe(data => {
      
    });
  }
  callback(){
    this.router.navigateByUrl('/');
  }

}
