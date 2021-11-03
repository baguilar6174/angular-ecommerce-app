import { ICategory } from "./icategory.metadats";

export interface IProduct {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    ICategory;
    image:       string;
    rating:      IRating;
    // stock:       number;
}

export interface IRating {
    rate:  number;
    count: number;
}