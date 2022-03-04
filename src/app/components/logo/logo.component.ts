import { Component  } from '@angular/core';

@Component({
  selector: 'spacex-logo',
  template: `
    <img src="../../../assets/logo.png" />
  `,
  styles: [
    `
      :host {
        position: relative;
        height: 100%;
        width: 300px;
        display: flex;
        align-items: center;
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class LogoComponent {}
