import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email: string;
  public password: string;
  public name: string;
  public error: string;

  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
  }
  public submit() {
   
    this.auth.signup(this.email, this.password,this.name)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['/login']),
        err => this.error = 'Email đã tồn tại. Vui lòng kiểm tra lại'
      );
  }

}
