import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-qluser',
  templateUrl: './qluser.component.html',
  styleUrls: ['./qluser.component.css']
})
export class QluserComponent implements OnInit {

  users = {};

  dataSource = new UserDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUser()
    .subscribe(res => {
      console.log(res);
      this.users = res;
    }, err => {
      console.log(err);
    });
  }

}
export class UserDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getUser();
  }

  disconnect() {

  }
}
