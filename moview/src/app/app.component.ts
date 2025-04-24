import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Install modules
SwiperCore.use([Autoplay, Pagination]);

register();


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {}
}
