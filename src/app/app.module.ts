import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentsModule } from 'angular-contents';
import {ContentsDirective} from 'angular-contents/src/contents.directive'
import {ContentsLinkDirective} from 'angular-contents/src/contents-link.directive'
import {ContentsSectionDirective} from 'angular-contents/src/contents-section.directive'

import { NgxPageScrollModule } from 'ngx-page-scroll';
import { PagescrollComponent } from './comp/pagescroll/pagescroll.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { Subject } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';
import { DefaultComponent } from './comp/default/default.component';
import { ScrollingViewTableComponent } from './comp/scrolling-view-table/scrolling-view-table.component';
import { ScrollingViewComponent } from './comp/scrolling-view/scrolling-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PagescrollComponent,
    DefaultComponent,
    ScrollingViewTableComponent,
    ScrollingViewComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentsModule,
    NgxPageScrollModule,
    
    NgxPageScrollCoreModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// 
