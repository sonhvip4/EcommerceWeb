import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product_detail= {};
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getProductDetails(this.route.snapshot.params['id']);
  }
  getProductDetails(id) {
    console.log("da vao day");
    this.api.getProduct_Detail(id)
    .subscribe(data => {
      console.log(data);
      this.product_detail = data;
    });
  }
  addcart(){
    this.api.addcart(this.product_detail)
    .subscribe(res => {
       
        this.router.navigate(['/mycart']);
      }, (err) => {
        console.log(err);
      });
  }
  

}
