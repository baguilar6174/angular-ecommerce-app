import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from '@data/interfaces/api/icart.metadats';
import { CartService } from '@shared/services/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public cartData: ICart;
  public cartTotal : number;  

  constructor(
    private cartService: CartService,
    // private orderService : OrderService,
    private router : Router,
    private spinner : NgxSpinnerService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.cartService.cartTotal$.subscribe( total => this.cartTotal = total );
    this.cartService.cartData$.subscribe( (data : ICart) => this.cartData = data );
  }

  onCheckOut() {
    this.spinner.show().then( p => {
      this.cartService.CheckoutFromCart(2);
    });
  }

}
