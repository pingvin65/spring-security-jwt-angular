import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  datajwt = {};
  value = '';
  submitted = false;
  ifLoginError: boolean = false;
  tocken = "";

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  update(value: string) { this.value = value; }

  get f() { return this.loginForm.controls; }

  goBack() {
    this.location.back();
  }



  onSubmit() {

    this.submitted = true;
    this.ifLoginError = false;
    if (this.loginForm.invalid) {
      return;
    }

    this.apiService.loginApi2(this.loginForm.value.userName, this.loginForm.value.password).subscribe(
      (res) => {
        this.tocken = res.jws;
        this.apiService.setStorageJwtocen(res.jwt);
        // this.apiService.urlPath.subscribe(
        //   url => console.log(url)    
        //  )
        if (  ( this.apiService.getUrlPathSource()  === "/models") || ( this.apiService.getUrlPathSource()  === "/brands" ) ) {
          let nexpage = this.apiService.getUrlPathSource();
          this.apiService.setUrlPathSource('/');
          this.apiService.setIsMenuCollapsedSource(true);
          this.router.navigateByUrl(nexpage);
        } else {
          this.apiService.setUrlPathSource('/');
          this.apiService.setIsMenuCollapsedSource(true);
          this.router.navigateByUrl('/');
        }
      },
      (err) => {
        this.ifLoginError = true;
        console.log(err);
      }

    );

  }

}
