import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../api/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }
  info={};

  ngOnInit() {
    this.getInforUser();
  }
  getInforUser() {
        if(this.auth.loggedIn){
        this.auth.getInforUser()
        .subscribe(data => {
          this.info=data;   
        });
      }
  }

}
