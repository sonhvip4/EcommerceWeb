import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
//import { MustMatch } from './_helpers/must-match.validator';
@Component({
  selector: 'app-qlproduct-create',
  templateUrl: './qlproduct-create.component.html',
  styleUrls: ['./qlproduct-create.component.css']
})
export class QlproductCreateComponent implements OnInit {

  productFrom: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.productFrom = this.formBuilder.group({
          name: ['', Validators.required],
          code: ['', Validators.required],
          price: ['', Validators.required],
          color: ['Mặc định', Validators.required],
          linkimage: ['', Validators.required],
          description: ['', Validators.required],
        
     
          
        }, {
         // validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.productFrom.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.productFrom.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.productFrom.value))
    }
 

}
