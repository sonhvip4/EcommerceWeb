import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-qlproduct',
  templateUrl: './qlproduct.component.html',
  styleUrls: ['./qlproduct.component.css']
})
export class QlproductComponent implements OnInit {

  products={};
  config: any;
  collection = { count: 60, data: [] };
  dataSource = new QLProductDataSource(this.api);
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProduct()
    .subscribe(res => {
      console.log(res);
      this.products = res;
    }, err => {
      console.log(err);
    });
  }
  

}
export class QLProductDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getProduct();
  }

  disconnect() {

  }
}
