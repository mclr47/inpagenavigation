
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {  PageScrollInstance } from 'ngx-page-scroll-core';
import { PageScrollService } from 'ngx-page-scroll-core';
 import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
@Component({
  selector: 'app-scrolling-view-table',
  templateUrl: 'scrolling-view-table.component.html',
  styleUrls: ['scrolling-view-table.component.scss'],
})
export class ScrollingViewTableComponent {
  @ViewChild('container') private container: ElementRef;

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {}

  public animateScroll(sectionTarget: string): void {
    // https://github.com/Nolanus/ngx-page-scroll#service
    const pageScrollInstance: PageScrollInstance = this.pageScrollService.create
    ({
      document: this.document, scrollTarget: sectionTarget, scrollViews: [this.container.nativeElement]
    });
//     const pageScrollInstance = PageScrollInstance.simpleInstance(document, "#targetname");
// this.PageScrollService.start(pageScrollInstance);
    this.pageScrollService.start(pageScrollInstance);
  }
}

