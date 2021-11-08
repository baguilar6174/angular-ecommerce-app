import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '@data/interfaces/api/iproduct.metadats';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-card-promotions',
  templateUrl: './product-card-promotions.component.html',
  styleUrls: ['./product-card-promotions.component.scss']
})
export class ProductCardPromotionsComponent implements OnInit {

  @Input() product: IProduct;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  getRating(rate: number):string {
    return `${(rate*100)/5}%`;
  }

  addToCart(code : number){
    this.cartService.AddProductToCart(code);
  }

}
