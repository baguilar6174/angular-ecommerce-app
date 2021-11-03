import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from '@data/interfaces/api/icart.metadats';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartData: ICart;
  public cartTotal: number;
  public subTotal: number;

  constructor(
    public cartService: CartService,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
    this.cartService.cartData$.subscribe((data: ICart) => this.cartData = data);
  }

  changeQuantity(index: number, increase: boolean) {
    this.cartService.UpdateCartItems(index, increase);
  }

  change(value: number, index: number): void {
    if(value > this.cartData.data[index].numInCart){
      this.cartService.UpdateCartItems(index, true);
    }else{
      this.cartService.UpdateCartItems(index, false);
    }
  }

}
