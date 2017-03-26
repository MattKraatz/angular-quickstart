import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <button (click)="onClick($event)">{{count}}</button>`
})
export class AppComponent  {
  name = 'world';
  count = 0;
  onClick() {
    this.count++;
  }
}

