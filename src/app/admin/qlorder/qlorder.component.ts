import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-qlorder',
  templateUrl: './qlorder.component.html',
  styleUrls: ['./qlorder.component.css']
})
export class QlorderComponent implements OnInit {

  orders = {};

  dataSource = new OrderDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getOrderSuccess()
    .subscribe(res => {
      console.log(res);
      this.orders = res;
    }, err => {
      console.log(err);
    });
  }

}
export class OrderDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getOrderSuccess();
  }

  disconnect() {

  }
}
