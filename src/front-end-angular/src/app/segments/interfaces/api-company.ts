export interface ApiCompany {
    company_name: string,
    _links: {
      self: {
        href: string
      },
      company: {
        href: string,
        templated: boolean
      },
      products: {
        href: string,
        templated: boolean
      }
    }
}
