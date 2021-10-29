import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AboutComponent } from './page/about.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    SharedModule,
    AboutRoutingModule,
    CarouselModule
  ]
})
export class AboutModule { }
