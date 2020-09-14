import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ApiProduct } from 'src/app/segments/interfaces/api-product';
import { ApiPagePagination } from '../../../segments/interfaces/api-page-pagination';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  elmentIsZiro: boolean = true;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.params.subscribe(params => {
      if (Object.entries(params).length === 0) {
        this.apiService.changeCopany('');
      } else {

      }

    });
  }

  collectionSize = 0;
  page = 1;
  pagePagination: ApiPagePagination;
  product: ApiProduct;
  products: [any];
  httpError: boolean = true;
  company: string = '';

  ngOnInit(): void {
    // this.apiService.changeCopany('');
    this.getData(0);
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
    ];

    this.pagePagination = {
      number: 0,
      size: 0,
      totalElements: 0,
      totalPages: 0
    }
  }

  getData(pageNumber: number = 0) {
    let url;
    this.apiService.company.subscribe(
      company => {
        this.company = company;
      }
    )

    if ((this.company === '') || (this.company === undefined)) {
      url = this.apiService.ApiUrl.products + "&page=" + pageNumber;
      if (this.router.url !== '/models') {
        this.apiService.changeCopany('');
        this.router.navigateByUrl('/models');
      }
    } else {
      url = this.apiService.ApiUrl.products_by_com_name + this.company + "&page=" + pageNumber;
    }
    this.apiService.getApi(url).subscribe(
      data => {
        if (data.totalElements > 0) {
          this.elmentIsZiro = false;
        }
        this.isZiroElements(data.page.totalElements);
        console.log(this.isZiroElementsAndLogin(data.page.totalElements));
        
        this.products = data._embedded.products;
        this.pagePagination = data.page;
        this.collectionSize = (this.pagePagination.totalPages - 1) * 10;
        this.httpError = false;
      },
      error => {
        if (error.status === 401) {
          this.elmentIsZiro = false;
          this.apiService.logoutApi2();
        }
      }

    )
  }

  ifTotalPages(totalPages: number) {
    return totalPages > 1 ? true : false;
  }

  pageChanged(page) {
    this.getData(page);
  }

  checkLogin() {
    return this.apiService.getLoginSatus();
  }

  private isZiroElements(elements: number) {
    elements === 0 ? this.elmentIsZiro = true : this.elmentIsZiro = false;
  }

  private isZiroElementsAndLogin(elements: number) {
   ( elements === 0) && (this.apiService.getLoginSatus) ? this.elmentIsZiro = true : this.elmentIsZiro = false;
  }
}
