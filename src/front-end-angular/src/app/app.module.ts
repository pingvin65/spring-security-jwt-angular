import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/error/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './segments/footer/footer.component';
import { NavBarComponent } from './segments/nav-bar/nav-bar.component';
import { RedirectToLoginComponent } from './segments/redirect/redirect-to-login/redirect-to-login.component';
import { CompaniesComponent } from './pages/company/companies/companies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from './services/api.service';
import { ProductsComponent } from './pages/product/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    NavBarComponent,
    RedirectToLoginComponent,
    CompaniesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    Title,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
