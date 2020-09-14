import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  post :{
    title: string,
    content: string
  }

  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.post = {
      title: '',
      content: ''
    }
    this.setData();
  }
  getData(value: string = this.apiService.ApiUrl.home) {
    
    this.apiService.getPost(value).subscribe(
      data => {
        this.post = data;
      }
    )
  }

  setData(){
    switch(this.router.url){
      case '/home':
        this.getData(this.apiService.ApiUrl.home);
        break;
      case '/about':
        this.getData(this.apiService.ApiUrl.about);
        break;
        default:
          this.getData(this.apiService.ApiUrl.home);
    }
  }
}
