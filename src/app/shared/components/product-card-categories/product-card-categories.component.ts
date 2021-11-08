import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '@data/interfaces/api/iproduct.metadats';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-card-categories',
  templateUrl: './product-card-categories.component.html',
  styleUrls: ['./product-card-categories.component.scss']
})
export class ProductCardCategoriesComponent implements OnInit {

  @Input() product: IProduct;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addToCart(code : number){
    this.cartService.AddProductToCart(code);
  }

  getRating(rate: number):string {
    return `${(rate*100)/5}%`;
  }

}
