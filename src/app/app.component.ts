

import { Component, ViewEncapsulation, ViewChild, ElementRef, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
   title = 'ang-toc-npm';
  scrollView: boolean;
  scrollViewTable: boolean;
}

