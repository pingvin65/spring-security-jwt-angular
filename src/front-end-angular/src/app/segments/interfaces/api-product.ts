export interface ApiProduct {
    phone_name: string,
    description: string,
    _links:{
        self:{
            href:string  
        },
        product:{
            href:string,
            templated: boolean
        },
        company:{
            href:string,
            templated: boolean
        }
    }
}
