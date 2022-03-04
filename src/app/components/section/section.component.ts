import { Component, Input, OnInit } from '@angular/core';
import { image } from '../../animations';

@Component({
  selector: 'spacex-section',
  template: `
    <image [style.order]="order" [spacexObserver]="'translateX(20%)'">
      <img src="../../../assets/wallpaper.jpeg" />
    </image>
    <h4 [spacexObserver]="'translateX(-20%)'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam debitis
      natus inventore! Praesentium perspiciatis eius magni laudantium, impedit
      in rerum ducimus explicabo ratione asperiores quod accusamus nesciunt
      dignissimos nihil reprehenderit? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Quam debitis natus inventore! Praesentium perspiciatis
      eius magni laudantium, impedit in rerum ducimus explicabo ratione
      asperiores quod accusamus nesciunt dignissimos nihil reprehenderit? Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Quam debitis natus
      inventore! Praesentium perspiciatis eius magni laudantium, impedit in
      rerum ducimus explicabo ratione asperiores quod accusamus nesciunt
      dignissimos nihil reprehenderit?
    </h4>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        gap: 50px;
        align-items: center;
        color: white;
        background-image: linear-gradient(
          to right,
          rgba(0, 18, 51, 0.8),
          rgba(0, 18, 51, 1)
        );
      }

      h4 {
        font-weight: normal;
        font-size: 20px;
        width: 30%;
        height: 70%;

        padding: 5px;
      }

      image {
        width: 30%;
        height: 70%;
      }

      img {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
      }
    `,
  ],
  animations: [image],
})
export class SectionComponent {
  @Input() order!: number;
}