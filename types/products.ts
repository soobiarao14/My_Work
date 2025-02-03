// export interface product{
//     _id:string;
//     name:string;
//     _type:product;
//     image?:{
//         asset:{
//             _ref:string
//             _type:"image";
            
//         }
//     };
//     price:number;
//     description?:string;
//     title:string
//     validation:string;
//     tags: string[ ];
//     options?: string[];
//     list?: string[];
    
// slug:string
// }
// interface IProduct {
//     id: number;
//     name: string;
//     price: number;
//     image?: string[] | string;
//     code: string | number;
//     slug: string;

    

    
    
    

// }





export interface Product {
    _id: string;
    name: string;
    type: 'product';
    image?: {
        asset: {
            _ref: string;
            _type: 'image';
        };
    };
    price: number;
    description?: string;
    discountPercentage: number;
    slug: {
        _type: 'slug';
        current: string;
    };

    
}