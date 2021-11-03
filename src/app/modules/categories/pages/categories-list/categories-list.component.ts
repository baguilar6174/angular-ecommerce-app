import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcommerceService } from '@data/services/api/ecommerce.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {

  // Store categories results
  public categories: string[];
  // Variable to indicate loading request
  public loading: boolean = false;
  // Variable to indicate error in request
  public error: boolean = false;

  constructor(
    private ecommerceService: EcommerceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loading = true;
    this.ecommerceService.getCategories().subscribe((r) => {
      if (!r.error) {
        this.categories = r.data;
      } else {
        this.error = true;
      }
      this.loading = false;
    });
  }

}
