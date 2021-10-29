import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ICart, ICartModelPublic } from '@data/interfaces/api/icart.metadats';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Data variable to store the cart information on the client's local storage

  private cartDataClient: ICartModelPublic = {
    total: 0,
    prodData: [{
      inCart: 0,
      code: ''
    }]
  };

  // Data variable to store the cart information on the server

  private cartDataServer: ICart = {
    total: 0,
    data: [{
      numInCart: 0,
      product: undefined
    }]
  };

  /* OBSERVABLES FOR THE COMPONENTS TO SUBSCRIBE */

  cartTotal$ = new BehaviorSubject<number>(0);
  cartData$ = new BehaviorSubject<ICart>(this.cartDataServer);

  constructor(
    private httpClient: HttpClient,
    //private httpService: HttpClientService,
    //private orderService: OrderService,
    private router: Router,
    private toast: ToastrService,
    private spinner : NgxSpinnerService
  ) {
    this.cartTotal$.next(this.cartDataServer.total);
    this.cartData$.next(this.cartDataServer);
  }

  CalculateSubTotal(index): Number {
    let subTotal = 0;

    let p = this.cartDataServer.data[index];
    // @ts-ignore
    subTotal = p.product.price * p.numInCart;

    return subTotal;
  }

  AddProductToCart(code: string, quantity?: number) {

    // this.httpService.getProductByCode(code).subscribe(prod => {
    //   // 1. If the cart is empty
    //   if (this.cartDataServer.data[0].product === undefined) {
    //     this.cartDataServer.data[0].product = prod.data;
    //     this.cartDataServer.data[0].numInCart = quantity !== undefined ? quantity : 1;
    //     this.calculateTotal();
    //     this.cartDataClient.prodData[0].inCart = this.cartDataServer.data[0].numInCart;
    //     this.cartDataClient.prodData[0].code = prod.data.code;
    //     this.cartDataClient.total = this.cartDataServer.total;
    //     localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
    //     this.cartData$.next({ ... this.cartDataServer });
    //     this.toast.success(`${prod.data.name} se agrego!`, `Producto Agregado`,{
    //       timeOut: 1000,
    //       progressBar: true,
    //       progressAnimation: 'increasing',
    //       positionClass: 'toast-top-right'
    //     });
    //   }
    //   // 2. If the cart has some items
    //   else {
    //     let index = this.cartDataServer.data.findIndex(p => p.product.code === prod.data.code); // -1 or a positive value

    //     //    a. If that item is already in the cart => index is positive value
    //     if (index !== -1) {
          
    //       if (quantity !== undefined && quantity <= prod.data.stock) {
    //         // @ts-ignore
    //         this.cartDataServer.data[index].numInCart = this.cartDataServer.data[index].numInCart < prod.data.stock ? quantity : prod.data.stock;
    //       } else {
    //         // @ts-ignore
    //         this.cartDataServer.data[index].numInCart < prod.data.stock ? this.cartDataServer.data[index].numInCart++ : prod.data.stock;
    //       }

    //       this.cartDataClient.prodData[index].inCart = this.cartDataServer.data[index].numInCart;
          
    //       this.calculateTotal();
    //       this.cartDataClient.total = this.cartDataServer.total;
    //       localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
    //       this.cartData$.next({ ... this.cartDataServer });
          
    //       this.toast.info(`${prod.data.name} actualizar cantidad`, `Actualizar producto`,{
    //         timeOut: 1000,
    //         progressBar: true,
    //         progressAnimation: 'increasing',
    //         positionClass: 'toast-top-right'
    //       });

    //     } // end of if
    //     //    b. If that item is not in the cart
    //     else {
    //       this.cartDataServer.data.push({
    //         numInCart: 1,
    //         product: prod.data
    //       });

    //       this.cartDataClient.prodData.push({
    //         inCart: 1,
    //         code: prod.data.code
    //       });
    //       this.toast.success(`${prod.data.name} se agrego!`, `Producto Agregado`,{
    //         timeOut: 1000,
    //         progressBar: true,
    //         progressAnimation: 'increasing',
    //         positionClass: 'toast-top-right'
    //       });
    //       this.calculateTotal();
    //       this.cartDataClient.total = this.cartDataServer.total;
    //       localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
    //       this.cartData$.next({ ... this.cartDataServer });
    //     } // end of else

    //   }
    // });
  }

  UpdateCartItems(index: number, increase: boolean) {
    let data = this.cartDataServer.data[index];
    if (increase) {
      data.numInCart < data.product.stock ? data.numInCart++ : data.product.stock;
      this.cartDataClient.prodData[index].inCart = data.numInCart;
      this.calculateTotal();
      this.cartDataClient.total = this.cartDataServer.total;
      this.cartData$.next({ ... this.cartDataServer });
      localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
    } else {
      data.numInCart--;
      if (data.numInCart < 1) {
        this.DeleteProductFromCart(index);
        this.cartData$.next({ ... this.cartDataServer });
      } else {
        this.cartData$.next({ ... this.cartDataServer });
        this.cartDataClient.prodData[index].inCart = data.numInCart;
        this.calculateTotal();
        this.cartDataClient.total = this.cartDataServer.total;
        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
      }
    }
  }

  DeleteProductFromCart(index: number) {
    if (window.confirm('Estas seguro que quieres quitar el producto?')) {
      this.cartDataServer.data.splice(index, 1);
      this.cartDataClient.prodData.splice(index, 1);
      this.calculateTotal();
      this.cartDataClient.total = this.cartDataServer.total;

      if (this.cartDataClient.total === 0) {
        this.cartDataClient = {
          total: 0,
          prodData: [{
            inCart: 0,
            code: ''
          }]
        };
        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
      } else {
        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
      }

      if (this.cartDataServer.total === 0) {
        this.cartDataServer = {
          total: 0,
          data: [{
            numInCart: 0,
            product: undefined
          }]
        };
        this.cartData$.next({ ... this.cartDataServer });
      } else {
        this.cartData$.next({ ... this.cartDataServer });
      }
    } else {
      // If the user clicks the cancel button 
      return;
    }
  }

  private calculateTotal() {
    let Total = 0;
    this.cartDataServer.data.forEach(p => {
      const { numInCart } = p;
      const { price } = p.product;
      // @ts-ignore
      Total += numInCart * price;
    });
    this.cartDataServer.total = Total;
    this.cartTotal$.next(this.cartDataServer.total);
  }

  CheckoutFromCart(userId: Number) {
    // this.httpClient.post(`${this.SEVER_URL}orders/payment`, null).subscribe((res: { success: Boolean }) => {
    //   console.clear();
    //   if (res.success) {
    //     this.resetServerData();
    //     this.http.post(`${this.SEVER_URL}orders/new`, {
    //       userId: userId,
    //       products: this.cartDataClient.prodData
    //     }).subscribe((data: OrderResponse) => {

    //       this.orderService.getSingleOrder(data.order_id).then(prods => {
    //         if (data.success) {
    //           const navigationExtras: NavigationExtras = {
    //             state: {
    //               message: data.message,
    //               products: prods,
    //               orderId: data.order_id,
    //               total: this.cartDataClient.total
    //             }
    //           };
    //           this.spinner.hide().then();
    //           this.router.navigate(['/thankyou'], navigationExtras).then(p => {
    //             //this.cartDataClient = {prodData: [{incart: 0, id: 0}], total: 0};
    //             this.cartDataClient = {
    //               total: 0,
    //               prodData: [{
    //                 inCart: 0,
    //                 code: ''
    //               }]
    //             };
    //             this.cartTotal$.next(0);
    //             localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
    //           });
    //         }
    //       });

    //     })
    //   }
    //   else {
    //     this.spinner.hide().then();
    //     this.router.navigateByUrl('/checkout').then();
    //     this.toast.error(`Sorry, failed to book the order`, "Order Status", {
    //       timeOut: 1500,
    //       progressBar: true,
    //       progressAnimation: 'increasing',
    //       positionClass: 'toast-top-right'
    //     })
    //   }
    // });
  }

  private resetServerData() {
    this.cartDataServer = {
      data: [{
        product: undefined,
        numInCart: 0
      }],
      total: 0
    };
    this.cartData$.next({ ...this.cartDataServer });
  }

}
