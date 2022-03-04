
import { Component } from '@angular/core';
import { header } from '../../animations';

@Component({
  selector: 'spacex-header-section',
  template: `
    <ng-content select="[navigation]"></ng-content>
    <header-section-background></header-section-background>
    <section>
      <h3 @header>
        {{ description }}
      </h3>
      <ng-content></ng-content>
    </section>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      section {
        position: relative;
        overflow: hidden;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
        &::after {
          content: '';
          display: block;
          position: absolute;
          bottom: -200px;
          width: 110%;
          height: 320px;
          border-radius: 50%;
          background-image: linear-gradient(
            to bottom,
            rgba(0, 18, 51, 0.8),
            rgba(0, 18, 51, 1)
          );
        }
      }
      header-section-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('../../../assets/background2.jpeg');
        background-size: cover;
        background-position: center;
        z-index: -1;
        filter: brightness(80%);
      }

      h3 {
        color: white;
        width: 50%;
        text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
        font-size: 22px;
        padding: 20px;
      }
    `,
  ],
  animations: [header],
})
export class HeaderSectionComponent {
  description = `Would you like to be taken beyond the horizon?
     Do you consider yourself a stars-gazer? 
     a voyager? Join us and let us take
     your journey to the next level.`;
}

