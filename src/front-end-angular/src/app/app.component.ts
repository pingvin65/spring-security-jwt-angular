import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spring angular';
  constructor(private titleService: Title, private apiService: ApiService,) {
     this.titleService.setTitle(this.title);

    if(localStorage.getItem("jwt")!== null || localStorage.getItem("jwt") === undefined){
      this.apiService.setLoginStatus(true);
    }
    
   } 
}
