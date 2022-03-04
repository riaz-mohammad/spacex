import { animate, style, transition, trigger, animateChild, query, stagger, group, state } from '@angular/animations';



export const header = trigger('header', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(50%)',
    }),
    animate('1000ms 200ms ease'),
  ]),
]);

export const arrow = trigger('arrow', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'rotate(90deg) translateY(200%)',
    }),
    animate('800ms ease'),
  ]),
]);

export const input = trigger('input', [
  transition(':enter', [
    query('span', [
      style({
        opacity: 0
      }),
      
    ], {optional: true}),
    style({
      opacity: 0,
      transform: 'translateY(50%)'
    }),
    animate('1000ms 200ms ease'),
    group([
      query('@arrow', animateChild()),
      query('span', [
        stagger('50ms', [
          animate('500ms 200ms ease',
          style({opacity: 1})
          )
        ])
      ], {optional: true})
    ])
  ]),
  
])

export const image = trigger('image', [

  state('false', style({
    opacity: 0,
    transform: '{{translate}}'
  }), {params: {translate: 'translateX(0%)'}}),
  state('true', style({
    opacity: 1,
    transform: 'translateX(0%)'
  })),

  transition('true <=> false', [
    animate('1000ms ease')
  ]),

  
])