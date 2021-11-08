import { Component, OnInit } from '@angular/core';
import { IProduct } from '@data/interfaces/api/iproduct.metadats';
import { EcommerceService } from '@data/services/api/ecommerce.service';

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
    private ecommerceService: EcommerceService
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
