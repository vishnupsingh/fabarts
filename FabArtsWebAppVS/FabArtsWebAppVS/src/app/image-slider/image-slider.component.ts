import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  images: Array<string>;

  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 600
  };
  constructor() { }

  ngOnInit() {
    this.images = ['https://picsum.photos/900/500?image=70',
                   'https://picsum.photos/900/500?image=35',
                    'https://picsum.photos/900/500?image=10',
                    'https://picsum.photos/900/500?image=34'
                  ];
  }
}

