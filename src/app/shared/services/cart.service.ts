import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ICart, ICartModelPublic } from '@data/interfaces/api/icart.metadats';
import { EcommerceService } from '@data/services/api/ecommerce.service';
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
      id: null
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
    private ecommerceService: EcommerceService,
    //private orderService: OrderService,
    private router: Router,
    private toast: ToastrService,
    private spinner : NgxSpinnerService
  ) {
    this.cartTotal$.next(this.cartDataServer.total);
    this.cartData$.next(this.cartDataServer);

    // Get the information from localstorage ( if any )
    let info: ICartModelPublic = JSON.parse(localStorage.getItem('cart'));
    // Check if the information variable is null or has some data in it
    if (info !== null && info !== undefined && info.prodData[0].inCart !== 0) {
      // LocalStorage is not empty and has some information
      this.cartDataClient = info;
      //Loop throught each entry and put it in the cartDataServer object
      this.cartDataClient.prodData.forEach(p => {
        this.ecommerceService.getProductById(p.id).subscribe(actualProductInfo => {
          if (this.cartDataServer.data[0].numInCart === 0) {
            this.cartDataServer.data[0].numInCart = p.inCart;
            this.cartDataServer.data[0].product = actualProductInfo.data;
            this.calculateTotal();
            this.cartDataClient.total = this.cartDataServer.total;
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          } else {
            // cartDataServer already has some entry in it
            this.cartDataServer.data.push({
              numInCart: p.inCart,
              product: actualProductInfo.data
            });
            this.calculateTotal();
            this.cartDataClient.total = this.cartDataServer.total;
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          }
          this.cartData$.next({ ... this.cartDataServer });
        });
      });
    }
  }

  CalculateSubTotal(index): number {
    let subTotal = 0;

    let p = this.cartDataServer.data[index];
    // @ts-ignore
    subTotal = p.product.price * p.numInCart;

    return subTotal;
  }

  AddProductToCart(id: number, quantity?: number) {
    this.ecommerceService.getProductById(id).subscribe(prod => {
      // 1. If the cart is empty
      if (this.cartDataServer.data[0].product === undefined) {
        this.cartDataServer.data[0].product = prod.data;
        this.cartDataServer.data[0].numInCart = quantity !== undefined ? quantity : 1;
        this.calculateTotal();
        this.cartDataClient.prodData[0].inCart = this.cartDataServer.data[0].numInCart;
        this.cartDataClient.prodData[0].id = prod.data.id;
        this.cartDataClient.total = this.cartDataServer.total;
        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
        this.cartData$.next({ ... this.cartDataServer });
        this.toast.success(`${prod.data.title} se agrego!`, `Producto Agregado`,{
          timeOut: 1000,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        });
      }
      // 2. If the cart has some items
      else {
        let index = this.cartDataServer.data.findIndex(p => p.product.id === prod.data.id); // -1 or a positive value

        //    a. If that item is already in the cart => index is positive value
        if (index !== -1) {
          
          if (quantity !== undefined && quantity <= prod.data.rating.count) {
            // @ts-ignore
            this.cartDataServer.data[index].numInCart = this.cartDataServer.data[index].numInCart < prod.data.rating.count ? quantity : prod.data.rating.count;
          } else {
            // @ts-ignore
            this.cartDataServer.data[index].numInCart < prod.data.rating.count ? this.cartDataServer.data[index].numInCart++ : prod.data.rating.count;
          }

          this.cartDataClient.prodData[index].inCart = this.cartDataServer.data[index].numInCart;
          
          this.calculateTotal();
          this.cartDataClient.total = this.cartDataServer.total;
          localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          this.cartData$.next({ ... this.cartDataServer });
          
          this.toast.info(`${prod.data.title} actualizar cantidad`, `Actualizar producto`,{
            timeOut: 1000,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });

        } // end of if
        //    b. If that item is not in the cart
        else {
          this.cartDataServer.data.push({
            numInCart: 1,
            product: prod.data
          });

          this.cartDataClient.prodData.push({
            inCart: 1,
            id: prod.data.id
          });
          this.toast.success(`${prod.data.title} se agrego!`, `Producto Agregado`,{
            timeOut: 1000,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          });
          this.calculateTotal();
          this.cartDataClient.total = this.cartDataServer.total;
          localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          this.cartData$.next({ ... this.cartDataServer });
        } // end of else

      }
    });
  }

  UpdateCartItems(index: number, increase: boolean) {
    let data = this.cartDataServer.data[index];
    if (increase) {
      data.numInCart < data.product.rating.count ? data.numInCart++ : data.product.rating.count;
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
            id: null
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

  CheckoutFromCart(userId: number) {
    this.resetServerData();
    const navigationExtras: NavigationExtras = {
      state: {
        message: `Orden del usuario ${userId} procesada`,
        orderId: Date.now(),
        total: this.cartDataClient.total
      }
    };
    this.spinner.hide().then();
    this.router.navigate(['/purchase/finish'], navigationExtras).then(p => {
      this.cartDataClient = {
        total: 0,
        prodData: [{
          inCart: 0,
          id: null
        }]
      };
      this.cartTotal$.next(0);
      localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
    });


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
    //                 id: null
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
