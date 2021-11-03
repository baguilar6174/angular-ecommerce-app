import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from '@data/interfaces/api/icart.metadats';
import { ICategory } from '@data/interfaces/api/icategory.metadats';
import { EcommerceService } from '@data/services/api/ecommerce.service';
import { CartService } from '@shared/services/cart.service';

declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public cartData: ICart;
  public cartTotal: number;
  public opened: boolean = false;
  public modes: Array<string> = ['over', 'push', 'slide'];

  // Store categories results
  public categories: string[];
  // Variable to indicate loading request
  public loading: boolean = false;
  // Variable to indicate error in request
  public error: boolean = false;

  constructor(
    public cartService: CartService,
    public router: Router,
    private ecommerceService: EcommerceService,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
    this.cartService.cartData$.subscribe(data => this.cartData = data);
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

  ngAfterViewInit(): void {

    $(document).ready(function () {
      'use strict';
      // Add Mobile menu icon arrows to items with children
      $('.mobile-menu').find('li').each(function () {
        var $this = $(this);
        if ($this.find('ul').length) {
          $('<span/>', {
            'class': 'mmenu-btn'
          }).appendTo($this.children('a'));
        }
      });
      // Mobile Menu toggle children menu
      $('.mmenu-btn').on('click', function (e) {
        var $parent = $(this).closest('li'),
          $targetUl = $parent.find('ul').eq(0);

        if (!$parent.hasClass('open')) {
          $targetUl.slideDown(300, function () {
            $parent.addClass('open');
          });
        } else {
          $targetUl.slideUp(300, function () {
            $parent.removeClass('open');
          });
        }
        e.stopPropagation();
        e.preventDefault();
      });
    });

  }

  toggleSidebar() {
    this.opened = !this.opened;
  }

}
