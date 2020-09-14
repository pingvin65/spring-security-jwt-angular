import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CompaniesComponent } from './pages/company/companies/companies.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/error/page-not-found/page-not-found.component';
import { ProductsComponent } from './pages/product/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'item-type', component: ItemTypeComponent },
  { path: 'brands', component: CompaniesComponent },
  { path: 'models', component: ProductsComponent },
  { path: 'models/:company', component: ProductsComponent },
  { path: 'about', component: HomeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
