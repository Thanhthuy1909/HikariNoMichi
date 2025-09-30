import { Component } from '@angular/core';
import { Header } from '../component/header/header';
import { LeftContent } from '../component/left-content/left-content';
import { RightContent } from '../component/right-content/right-content';
import { MainContent } from '../component/main-content/main-content';
@Component({
  selector: 'app-root',
  imports: [Header, LeftContent, RightContent,MainContent],
  template: `
    <div class="container-fluid">
        <app-header></app-header>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2" id="left">
          <app-left-content></app-left-content>
        </div>
        <div class="col-8" id="main">
          <app-main-content></app-main-content>
        </div>
        <div class="col-2" id="right">
          <app-right-content></app-right-content>
        </div>
      </div>
    </div>`,
  styleUrls: ['./app.css']
})
export class App {

}