import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spacex-button',
  template: ` <button><ng-content></ng-content></button> `,
  styles: [
    `
      :host {
        display: flex;
        border-radius: 30px;
        background: rgba(0, 40, 85, 1);
        color: white;

      }
      button {
        cursor: pointer;
        display: flex;
        gap: inherit;
        justify-content: center;
        align-items: center;
        outline: none;
        border: none;
        border-radius: inherit;
        width: 100%;
        height: 100%;
        background: inherit;
        color: inherit;
        font-weight: inherit;
        font-size: inherit;
      }
    `,
  ],
})
export class ButtonComponent {}

