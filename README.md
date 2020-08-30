# spring-security-jwt-angular

``` bash
$ tree -I 'node_modules|cache|test*|target'
.
├── HELP.md
├── mvnw
├── mvnw.cmd
├── pom.xml
├── pom.xml.marinedb
├── README.md
└── src
    ├── front-end-angular
    │   ├── angular.json
    │   ├── e2e
    │   │   ├── protractor.conf.js
    │   │   ├── src
    │   │   │   ├── app.e2e-spec.ts
    │   │   │   └── app.po.ts
    │   │   └── tsconfig.json
    │   ├── karma.conf.js
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── README.md
    │   ├── src
    │   │   ├── app
    │   │   │   ├── app.component.html
    │   │   │   ├── app.component.scss
    │   │   │   ├── app.component.spec.ts
    │   │   │   ├── app.component.ts
    │   │   │   ├── app.module.ts
    │   │   │   ├── app-routing.module.ts
    │   │   │   ├── dist
    │   │   │   │   ├── app.component.css
    │   │   │   │   ├── app.component.js
    │   │   │   │   ├── app.module.js
    │   │   │   │   └── app-routing.module.js
    │   │   │   ├── interfaces
    │   │   │   ├── pages
    │   │   │   │   ├── about
    │   │   │   │   │   ├── about.component.html
    │   │   │   │   │   ├── about.component.scss
    │   │   │   │   │   ├── about.component.spec.ts
    │   │   │   │   │   └── about.component.ts
    │   │   │   │   ├── company
    │   │   │   │   │   └── companies
    │   │   │   │   │       ├── companies.component.html
    │   │   │   │   │       ├── companies.component.scss
    │   │   │   │   │       ├── companies.component.spec.ts
    │   │   │   │   │       ├── companies.component.ts
    │   │   │   │   │       └── dist
    │   │   │   │   │           ├── companies.component.css
    │   │   │   │   │           └── companies.component.js
    │   │   │   │   ├── error
    │   │   │   │   │   └── page-not-found
    │   │   │   │   │       ├── page-not-found.component.html
    │   │   │   │   │       ├── page-not-found.component.scss
    │   │   │   │   │       ├── page-not-found.component.spec.ts
    │   │   │   │   │       └── page-not-found.component.ts
    │   │   │   │   ├── home
    │   │   │   │   │   ├── home.component.html
    │   │   │   │   │   ├── home.component.scss
    │   │   │   │   │   ├── home.component.spec.ts
    │   │   │   │   │   └── home.component.ts
    │   │   │   │   ├── login
    │   │   │   │   │   ├── dist
    │   │   │   │   │   │   ├── login.component.css
    │   │   │   │   │   │   └── login.component.js
    │   │   │   │   │   ├── login.component.html
    │   │   │   │   │   ├── login.component.scss
    │   │   │   │   │   ├── login.component.spec.ts
    │   │   │   │   │   └── login.component.ts
    │   │   │   │   └── product
    │   │   │   │       └── products
    │   │   │   │           ├── dist
    │   │   │   │           │   └── products.component.js
    │   │   │   │           ├── products.component.html
    │   │   │   │           ├── products.component.scss
    │   │   │   │           ├── products.component.spec.ts
    │   │   │   │           └── products.component.ts
    │   │   │   ├── segments
    │   │   │   │   ├── footer
    │   │   │   │   │   ├── dist
    │   │   │   │   │   │   └── footer.component.css
    │   │   │   │   │   ├── footer.component.html
    │   │   │   │   │   ├── footer.component.scss
    │   │   │   │   │   ├── footer.component.spec.ts
    │   │   │   │   │   └── footer.component.ts
    │   │   │   │   ├── interfaces
    │   │   │   │   │   ├── api-company-single.ts
    │   │   │   │   │   ├── api-company.ts
    │   │   │   │   │   ├── api-page.ts
    │   │   │   │   │   ├── api-user.ts
    │   │   │   │   │   └── dist
    │   │   │   │   │       ├── api-company.js
    │   │   │   │   │       ├── api-company-single.js
    │   │   │   │   │       ├── api-page.js
    │   │   │   │   │       └── api-user.js
    │   │   │   │   ├── nav-bar
    │   │   │   │   │   ├── dist
    │   │   │   │   │   │   ├── nav-bar.component.css
    │   │   │   │   │   │   └── nav-bar.component.js
    │   │   │   │   │   ├── nav-bar.component.html
    │   │   │   │   │   ├── nav-bar.component.scss
    │   │   │   │   │   ├── nav-bar.component.spec.ts
    │   │   │   │   │   └── nav-bar.component.ts
    │   │   │   │   └── redirect
    │   │   │   │       └── redirect-to-login
    │   │   │   │           ├── dist
    │   │   │   │           │   └── redirect-to-login.component.js
    │   │   │   │           ├── redirect-to-login.component.html
    │   │   │   │           ├── redirect-to-login.component.scss
    │   │   │   │           ├── redirect-to-login.component.spec.ts
    │   │   │   │           └── redirect-to-login.component.ts
    │   │   │   └── services
    │   │   │       ├── api.service.spec.ts
    │   │   │       ├── api.service.ts
    │   │   │       └── dist
    │   │   │           └── api.service.js
    │   │   ├── assets
    │   │   │   ├── logo2.png
    │   │   │   └── logo.svg
    │   │   ├── environments
    │   │   │   ├── environment.prod.ts
    │   │   │   └── environment.ts
    │   │   ├── favicon.ico
    │   │   ├── favicon.png
    │   │   ├── index.html
    │   │   ├── main.ts
    │   │   ├── polyfills.ts
    │   │   └── styles.scss
    │   ├── tsconfig.app.json
    │   ├── tsconfig.base.json
    │   ├── tsconfig.json
    │   ├── tsconfig.spec.json
    │   └── tslint.json
    └── main
        ├── java
        │   └── com
        │       └── sasa
        │           └── app
        │               ├── AppUserDetailsService.java
        │               ├── controllers
        │               │   ├── AppController.java
        │               │   ├── CompanyController.java
        │               │   ├── exceptions
        │               │   │   └── CompanyNotFoundException.java
        │               │   └── IndexController.java
        │               ├── entity
        │               │   ├── Company.java
        │               │   ├── EmployeeEntity.java
        │               │   ├── ItemTypeEntity.java
        │               │   ├── Product.java
        │               │   ├── projections
        │               │   │   ├── CompanyProjection2.java
        │               │   │   ├── CompanyProjection.java
        │               │   │   ├── CompanyProjectionView.java
        │               │   │   └── ProductProjection.java
        │               │   ├── RegionEntity.java
        │               │   └── UserEntity.java
        │               ├── filters
        │               │   └── JwtRequestFilter.java
        │               ├── models
        │               │   ├── AuthenticationRequest.java
        │               │   └── AuthenticationResponse.java
        │               ├── MvcConfig.java
        │               ├── repository
        │               │   ├── CompanyRepository2.java
        │               │   ├── CompanyRepository.java
        │               │   ├── ItemTypeRepository.java
        │               │   ├── ProductRepository.java
        │               │   └── UserRepository.java
        │               ├── service
        │               │   └── UserService.java
        │               ├── SpringSecurityJwtAngularApplication.java
        │               ├── utlies
        │               │   ├── JwtAuthenticationEntryPoint.java
        │               │   └── JwtUtil.java
        │               └── WebSecurityConfig.java
        └── resources
            ├── application.properties
            ├── data.sql
            ├── public
            │   ├── 3rdpartylicenses.txt
            │   ├── assets
            │   │   ├── logo2.png
            │   │   └── logo.svg
            │   ├── favicon.ico
            │   ├── index.html
            │   ├── logo.0c77ce517bcdb7b790f8.svg
            │   ├── main.640da9e4d0e4499be0a9.js
            │   ├── polyfills.e0a50bd2db48958ec104.js
            │   ├── runtime.e227d1a0e31cbccbf8ec.js
            │   └── styles.237c5230b53f3f54c859.css
            ├── static
            └── templates
                ├── error1.html
                └── index.html

54 directories, 139 files
$ 
```
