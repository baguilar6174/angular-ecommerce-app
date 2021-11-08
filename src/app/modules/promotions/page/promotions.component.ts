import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '@data/interfaces/api/iproduct.metadats';
import { EcommerceService } from '@data/services/api/ecommerce.service';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  // Store products results
  public products: IProduct[];
  // Variable to indicate loading request
  public loading: boolean = false;
  // Variable to indicate error in request
  public error: boolean = false;

  constructor(
    private ecommerceService: EcommerceService,
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

}
