import { Component, HostBinding} from '@angular/core';
import { input } from '../../animations';

@Component({
  selector: 'spacex-input',
  template: `
    <input placeholder="Email..."/>
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      display: flex;
      width: 50%;
      height: 50px;
      position: relative;
      box-shadow: 5px 5px 100px 0px rgba(0, 0, 0, 1);
      border-radius: 30px;
    }

    input {
      padding-left: 25px;
      width: 100%;
      border-radius: 30px;
      outline: none;
      border: none;
      font-weight: bold;
    }
  `],
  animations: [input]
})
export class InputComponent {
  @HostBinding('@input') run = true;
}
