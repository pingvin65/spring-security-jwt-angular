import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ApiPagePagination } from '../../../segments/interfaces/api-page-pagination';
import { ApiCompany } from '../../../segments/interfaces/api-company';
import { ApiCompanySingle } from '../../../segments/interfaces/api-company-single';
import { ApiProduct } from '../../../segments/interfaces/api-product';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  brend: string = "Brend";
  pagePagination: ApiPagePagination;
  company: ApiCompany;
  comSingle: ApiCompanySingle;
  companies: [ApiCompany];
  product: ApiProduct;
  products: [any];
  constructor(
    private apiService: ApiService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getData();
    this.comSingle = {
      company_name: "",
      description: ""
    };
    this.products = [
      this.product = {
        phone_name: '',
        description: '',
        _links: {
          self: {
            href: ''
          },
          product: {
            href: '',
            templated: false
          },
          company: {
            href: '',
            templated: false
          }
        }
      }
    ]
  }

  getData() {
    this.apiService.getApi().subscribe(
      data => {
        this.pagePagination = data.page;
        this.companies = data._embedded.companies;
      },
      error => {
        if (error.status === 401) {
          console.log('Error : ', error.status);
          this.apiService.logoutApi2();
        }
      }
    )
  }

  checkLogin() {
    return this.apiService.getLoginSatus();
  }


  linkButtonClickModels(link: string) {
    let newLink;
    if (link.search('{?projection}=') === -1) {
      newLink = link.replace('{?projection}', '');
    } else {
      newLink = link;
    }

    console.log(newLink);
  }

  openVerticallyCenteredCompany(content, link: string) {
    let newLink = this.linkCleanProjection(link);
    this.apiService.getApi(`${newLink}?projection=company_view`).subscribe(
      data => {
        this.comSingle = data;
      },
      error => {
        if (error.status === 401) {
          console.log('Error : ', error.status);
          this.apiService.logoutApi2();
        }
      }
    )
    this.modalService.open(content, { centered: true });
  }

  openVerticallyCenteredCompanyProducts(contentProducts, company_name: string) {
    this.apiService.getApi(`${this.apiService.ApiUrl.products_by_com_name + company_name}`).subscribe(
      data => {
        this.products = data._embedded.products;
        console.log(this.products);

      },
      error => {
        if (error.status === 401) {
          console.log('Error : ', error.status);
          this.apiService.logoutApi2();
        }
      }
    )
    this.modalService.open(contentProducts, { centered: true });
  }

  goToProducts(company_name: string){
    this.apiService.changeCopany(company_name);
    
  }

  private linkCleanProjection(link: string) {
    return link.replace('{?projection}', '');
  }
}
