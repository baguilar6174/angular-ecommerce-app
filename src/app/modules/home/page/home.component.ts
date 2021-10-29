import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  customOptions: OwlOptions = {
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    dots: false,
    margin: 0,
    loop: true,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    responsive: {
      0: {
        items: 2
      },
      420: {
        items: 3
      },
      600: {
        items: 4
      },
      900: {
        items: 5
      },
      940: {
        items: 4
      },
      1024: {
        items: 6
      },
      1360: {
        items: 7
      }
    }
  }

  customOptions2: OwlOptions = {
    nav: false,
    dots: true,
    margin: 20,
    loop: false,
    responsive: {
      0: {
        items: 2
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      },
      1600: {
        items: 6,
        nav: true
      }
    }
  }

  customOptions3: OwlOptions = {
    nav: false,
    dots: true,
    items: 3,
    margin: 20,
    loop: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  }

  customOptions0: OwlOptions = {
    dots: false,
    margin: 0,
    loop: true,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      900: {
        items: 1
      },
      1024: {
        items: 1
      }
    },
  }

}
