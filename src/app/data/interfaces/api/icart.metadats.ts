import { IProduct } from "./iproduct.metadats";

export interface ICart {
    total: number;
    data: [
        {
            product : IProduct,
            numInCart : number
        }      
    ];
}

export interface ICartModelPublic {
    total: number;
    prodData: [
        {
            code : string,
            inCart : number
        }      
    ];
}