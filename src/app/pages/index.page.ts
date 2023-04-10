import { injectContent, injectContentFiles } from '@analogjs/content';
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
  post$ = injectContent({
    param: 'slug',
    subdirectory: 'blog',
  });

  ngOnInit() {
    this.post$.subscribe((post) => {
      console.log('here', post)
    });
  }

  increment() {
    this.count++;
  }
}
