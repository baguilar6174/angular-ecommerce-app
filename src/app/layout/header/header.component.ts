import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from '@data/interfaces/api/icart.metadats';
import { ICategory } from '@data/interfaces/api/icategory.metadats';
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
  /**
    * Variable to store all products
    * @type {ICategory}
   */
  public categories: ICategory [] = [];
  public opened: boolean = false;
  public modes: Array<string> = ['over', 'push', 'slide'];

  constructor(
    public cartService: CartService,
    public router: Router,

  ) { }

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
    this.cartService.cartData$.subscribe(data => this.cartData = data);
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
