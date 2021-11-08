// import components

import { CategoryCardComponent } from "./category-card/category-card.component";
import { CategoryCardLoaderComponent } from "./loaders/category-card-loader/category-card-loader.component";
import { ProductCardCategoriesLoaderComponent } from "./loaders/product-card-categories-loader/product-card-categories-loader.component";
import { ProductCardListLoaderComponent } from "./loaders/product-card-list-loader/product-card-list-loader.component";
import { ProductCardPromotionsLoaderComponent } from "./loaders/product-card-promotions-loader/product-card-promotions-loader.component";
import { ProductCardCategoriesComponent } from "./product-card-categories/product-card-categories.component";
import { ProductCardListComponent } from "./product-card-list/product-card-list.component";
import { ProductCardPromotionsComponent } from "./product-card-promotions/product-card-promotions.component";

export const components: any[] = [
    ProductCardListComponent,
    ProductCardPromotionsComponent,
    ProductCardCategoriesComponent,
    ProductCardListLoaderComponent,
    ProductCardPromotionsLoaderComponent,
    ProductCardCategoriesLoaderComponent,
    CategoryCardLoaderComponent,
    CategoryCardComponent,
];

// export all components

export * from "./category-card/category-card.component";
export * from "./loaders/category-card-loader/category-card-loader.component";
export * from "./loaders/product-card-categories-loader/product-card-categories-loader.component";
export * from "./loaders/product-card-list-loader/product-card-list-loader.component";
export * from "./loaders/product-card-promotions-loader/product-card-promotions-loader.component";
export * from "./product-card-categories/product-card-categories.component";
export * from "./product-card-list/product-card-list.component";
export * from "./product-card-promotions/product-card-promotions.component";