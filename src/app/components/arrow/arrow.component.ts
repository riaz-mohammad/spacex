
import { Component, HostBinding } from '@angular/core';
import { arrow } from '../../animations';

@Component({
  selector: 'spacex-arrow',
  template: `
    <img src="../../../assets/rocket3.png" />
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        width: 30px;
        height: 110%;
        transform: rotate(90deg);
        position: relative;
        left: 20px;
      }
    `,
  ],

  animations: [arrow]
})
export class ArrowComponent {
  @HostBinding('@arrow') run = true;
}