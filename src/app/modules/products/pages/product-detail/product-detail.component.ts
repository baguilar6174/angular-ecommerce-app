import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@data/interfaces/api/iproduct.metadats';
import { EcommerceService } from '@data/services/api/ecommerce.service';
import { CartService } from '@shared/services/cart.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  // Store product result
  public productDetail: IProduct;
  // Current product id
  public id: number;
  // Variable to indicate loading request
  public loading: boolean = false;
  // Variable to indicate error in request
  public error: boolean = false;

  @ViewChild('quantity') quantityInput;
  @ViewChild('quantityBelow') quantityInputBelow;

  constructor(
    private ecommerceService: EcommerceService,
    private cartService: CartService,
    private route : ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loading = true;
    this.ecommerceService.getProductById(this.id).subscribe((r) => {
      if (!r.error) {
        this.productDetail = r.data;
      } else {
        this.error = true;
      }
      this.loading = false;
    });
  }

  addToCart(code: number){
    this.cartService.AddProductToCart(code, this.quantityInput.value);
  }

  addToCartBelow(code: number){
    this.cartService.AddProductToCart(code, this.quantityInputBelow.value);
  }

  getRating(rate: number):string {
    return `${(rate*100)/5}%`;
  }

  public prevValue: number = 1;
  public prevValueBelow: number = 1;

  change(value: number): void {
    if(value > this.prevValue){
      this.increase();
    }else if(value < this.prevValue){
      this.decrease();
    }
    this.prevValue = value;
    console.log(this.prevValue);
  }

  changeBelow(value: number): void {
    if(value > this.prevValueBelow){
      this.increaseBelow();
    }else if(value < this.prevValueBelow){
      this.decreaseBelow();
    }
    this.prevValueBelow = value;
  }
  
  increase() {
    let value = parseInt(this.quantityInput.value)-1;
    if (this.productDetail.rating.count >= 1){
      value++;
      if (value > this.productDetail.rating.count) {
        // @ts-ignore
        value = this.productDetail.rating.count;
      }
    } else {
      return;
    }
    this.quantityInput.value = value;
  }
  
  increaseBelow() {
    let value = parseInt(this.quantityInputBelow.value)-1;
    if (this.productDetail.rating.count >= 1){
      value++;
      if (value > this.productDetail.rating.count) {
        // @ts-ignore
        value = this.productDetail.rating.count;
      }
    } else {
      return;
    }

    this.quantityInputBelow.value = value;
  }

  decrease() {
    let value = parseInt(this.quantityInput.value)+1;
    if (this.productDetail.rating.count > 0){
      value--;
      if (value <= 0) {
        // @ts-ignore
        value = 0;
      }
    } else {
      return;
    }
    this.quantityInput.value = value;
  }

  decreaseBelow() {
    let value = parseInt(this.quantityInputBelow.value)+1;
    if (this.productDetail.rating.count > 0){
      value--;
      if (value <= 0) {
        // @ts-ignore
        value = 0;
      }
    } else {
      return;
    }
    this.quantityInputBelow.value = value;
  }

  customOptions: OwlOptions = {
    nav: false,
    dots: true,
    margin: 20,
    loop: false,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      760: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 4,
        nav: true,
        dots: false
      }
    },
  }

}
