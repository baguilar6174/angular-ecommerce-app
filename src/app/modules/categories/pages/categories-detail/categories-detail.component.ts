import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@data/interfaces/api/iproduct.metadats';
import { EcommerceService } from '@data/services/api/ecommerce.service';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.scss']
})
export class CategoriesDetailComponent implements OnInit {

  // Store products results
  public products: IProduct[];
  // Variable to indicate loading request
  public loading: boolean = false;
  // Variable to indicate error in request
  public error: boolean = false;
  // Current category
  public category: string;

  constructor(
    private ecommerceService: EcommerceService,
    private route : ActivatedRoute,
  ) {
    this.category = this.route.snapshot.params.category;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loading = true;
    this.ecommerceService.getProductsByCategory(this.category).subscribe((r) => {
      if (!r.error) {
        this.products = r.data;
      } else {
        this.error = true;
      }
      this.loading = false;
    });
  }

}
