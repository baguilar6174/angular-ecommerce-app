import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '@data/interfaces/api/iproduct.metadats';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss']
})
export class ProductCardListComponent implements OnInit {

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
