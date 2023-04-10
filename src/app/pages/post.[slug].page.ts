import { injectContent } from '@analogjs/content';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    <br/>
    {{ post$ | async | json }}
  `,
})
export default class PageComponent {
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
