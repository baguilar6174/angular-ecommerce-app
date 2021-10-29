import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '@data/interfaces/api/iproduct.metadats';
import { EcommerceService } from '@data/services/api/ecommerce.service';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  // Store products results
  public products: IProduct[];
  // Variable to indicate loading request
  public loading: boolean = false;
  // Variable to indicate error in request
  public error: boolean = false;

  constructor(
    private ecommerceService: EcommerceService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loading = true;
    this.ecommerceService.getProducts().subscribe((r) => {
      if (!r.error) {
        this.products = r.data;
      } else {
        this.error = true;
      }
      this.loading = false;
    });
  }

  getRating(rate: number):string {
    return `${(rate*100)/5}%`;
  }

  selectProduct(code: number){
    this.router.navigate(['/product',code]).then();
  }

  addToCart(code : number){
    this.cartService.AddProductToCart(code.toString());
  }

}
