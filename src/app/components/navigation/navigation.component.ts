import { Component } from '@angular/core';

@Component({
  selector: 'spacex-navigation',
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        position: sticky;
        top: 0%;
        z-index: 100;
        color: white;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding-inline: 100px;
        height: 8vh;
        background-image: linear-gradient(

          rgba(0, 18, 51, 1),
          rgba(0, 18, 51, 0.3)
    
        
        );
      }
    `,
  ],
})
export class NavigationComponent {}
