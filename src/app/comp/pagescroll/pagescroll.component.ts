import { Component, OnInit } from '@angular/core';
// import {ContentSection} from
import {ContentsDirective} from 'angular-contents/src/contents.directive'
import {ContentsLinkDirective} from 'angular-contents/src/contents-link.directive'
import {ContentsSectionDirective} from 'angular-contents/src/contents-section.directive'

@Component({
  selector: 'app-pagescroll',
  templateUrl: './pagescroll.component.html',
  styleUrls: ['./pagescroll.component.scss']
})
export class PagescrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
