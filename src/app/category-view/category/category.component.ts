import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

   categorys = {};
   displayedColumns = ['name', 'note'];
 
  dataSource = new CategoryDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getCategory()
      .subscribe(res => {
        console.log(res);
        this.categorys = res;
      }, err => {
        console.log(err);
      });
  }

}
export class CategoryDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getCategory();
  }

  disconnect() {

  }
}
