import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders={};
  sum_price=+"0";
 
  dataSource = new OrdersDataSource(this.api);
  constructor(private api: ApiService,private router: Router) { }

  ngOnInit() {
    this.api.getCarts()
    .subscribe(res => {
      this.orders = res;    
      let i=0;
      for(let item in this.orders){
        this.sum_price+=Number(this.orders[i].price);
        i++;
      }
      console.log(this.sum_price);
    }, err => {
      console.log(err);
    });
    
  }
  myfunc($event){
    alert("Dat hang thanh cong");
    this.router.navigateByUrl('/success');
  }

}
export class OrdersDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getCarts();
  }

  disconnect() {

  }
}
