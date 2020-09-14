import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUser } from '../segments/interfaces/api-user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user:ApiUser;

  private isMenuCollapsedSource: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public isMenuCollapsed = this.isMenuCollapsedSource.asObservable();

  private urlPathSource: BehaviorSubject<string> = new BehaviorSubject("/");
  public urlPath = this.urlPathSource.asObservable();

  private loginSource = new BehaviorSubject(false);
  public loginUser = this.loginSource.asObservable();

  private jwtocenSource: BehaviorSubject<string> = new BehaviorSubject('');
  public jwtocen = this.jwtocenSource.asObservable();

  private companySource: BehaviorSubject<string> = new BehaviorSubject('');
  public company = this.companySource.asObservable();

  // private urlSource = new BehaviorSubject('default message');
  // currenUrl = this.urlSource.asObservable();

  // baseLink = "http://10.10.1.108:8080/api/v1";
  // baseLink2 = "http://10.10.1.108:8080";

  baseLink = "http://localhost:8080/api/v1";
  baseLink2 = "http://localhost:8080";

  public ApiUrl = {

    login: this.baseLink + "/authenticate",
    item_types: this.baseLink2 + "/item_types",
    companies: this.baseLink2 + "/companies",
    products: this.baseLink2 + "/products?size=4",
    products_by_com_name: this.baseLink2 + '/products/search/company_name?projection=productsByCompany&size=4&name=',
    home: this.baseLink2 + '/posts/search/title?title=Home',
    about: this.baseLink2 + '/posts/search/title?title=About'
  };

  private searchProducts = new BehaviorSubject(this.ApiUrl.products);
  currentProductsLink = this.searchProducts.asObservable();


  constructor(
    private http: HttpClient
  ) { }

  public setIsMenuCollapsedSource(value: boolean) {
    this.isMenuCollapsedSource.next(value);
  }

  public setUrlPathSource(value: string) {
    this.urlPathSource.next(value);
  }

  public getUrlPathSource() {
    return this.urlPathSource.getValue();
  }

  public setLoginStatus(login: boolean) {
    this.loginSource.next(login)
  }
  public getLoginSatus() {
    return this.loginSource.getValue();
  }

  public setStorageJwtocen(value: string) {
    localStorage.setItem('jwt', value);
    this.setJwtocken(value);
    // this.jwtocenSource.next(value);
    // this.loginSource.next(true);
    this.setLoginStatus(true);
  }

  public setJwtocken(value: string) {
    this.jwtocenSource.next(value);
  }

  changeUrl(url: string) {
    this.searchProducts.next(url);
  }


  changeCopany(url: string) {
    this.companySource.next(url);
  }

  logoutApi2() {
    localStorage.removeItem("jwt");
    this.loginSource.next(false);
  }

  loginApi2(username: string, password: string) {
    // const body = { username: username, password: password };
    const user = this.setUser(username, password);

    let options = this.createRequestOptions();
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.ApiUrl.login, user  , { headers: options });
  }

  private createRequestOptions() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return headers;
  }

  getCompanies() {
    let tocen = localStorage.getItem('jwt');
    if (tocen === null) {
      tocen = this.jwtocenSource.getValue();
    }

    const headers = { 'Authorization': 'Bearer ' + tocen, 'Content-Type': 'application/json' }

    return this.http.get<any>(this.ApiUrl.companies, { headers });

  }

  getApi(url = this.ApiUrl.companies) {
    let tocen = localStorage.getItem('jwt');
    if (tocen === null) {
      tocen = this.jwtocenSource.getValue();
    }

    const headers = { 'Authorization': 'Bearer ' + tocen, 'Content-Type': 'application/json' }

    return this.http.get<any>(url, { headers });

  }

  getProducts(url:string = this.baseLink2){

  }

  getPost(url = this.ApiUrl.companies) {
    let tocen = localStorage.getItem('jwt');
    if (tocen === null) {
      tocen = this.jwtocenSource.getValue();
    }
    return this.http.get<any>(url, { });
  }

  private setUser(username:string, password:string){
   return  this.user ={
      username: username,
      password: password
    }
  }

}
