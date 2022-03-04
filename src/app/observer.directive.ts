import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[spacexObserver]',
})
export class ObserverDirective {
  @Input() spacexObserver!: string;
  private _animate = false;
  
  @HostBinding('@image')
  get animate(): any  {
    return {
      value: this._animate,
      params: { translate: this.spacexObserver },
    };
  }

  constructor(private element: ElementRef<HTMLLIElement>) {}
  private observer!: IntersectionObserver;

  ngOnInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this._animate = true;
          return;
        }
        this._animate = false;
      },
      {
        rootMargin: '0px',
        threshold: [0.5],
      }
    );

    this.observer.observe(this.element.nativeElement);
  }
}
