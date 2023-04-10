import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    Analog
  `
})
export default class HomeComponent {
  count = 0;

  ngOnInit() {

  }

  increment() {
    this.count++;
  }
}
