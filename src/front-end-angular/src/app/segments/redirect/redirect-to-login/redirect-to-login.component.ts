import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-to-login',
  templateUrl: './redirect-to-login.component.html',
  styleUrls: ['./redirect-to-login.component.scss']
})
export class RedirectToLoginComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onClickLogin();
    this.checkLogin();
  }


  checkLogin() {
    return this.apiService.getLoginSatus() ? false : true;
  }

  onClickLogin() {
    this.apiService.setUrlPathSource(this.router.url);
  }
}
