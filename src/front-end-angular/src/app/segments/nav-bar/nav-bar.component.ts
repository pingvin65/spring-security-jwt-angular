import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public collapsed = true;

  constructor(
    private titleService: Title,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.isMenuCollapsed.subscribe(collapsed => this.collapsed = collapsed);
  }
  setDocTitle(title: string) {
    // console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle("spring angular - " + title);
    this.apiService.setUrlPathSource(this.router.url);
    
  }

  logoutMethod() {
    this.apiService.logoutApi2();
  }

  checkLogin() {
    return this.apiService.getLoginSatus();
  }
}
