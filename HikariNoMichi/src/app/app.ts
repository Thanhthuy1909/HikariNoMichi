import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home } from './home/home';
import { HomeFooter } from './home-footer/home-footer';
import { HomeBanner } from './home-banner/home-banner';
@Component({
  selector: 'app-root',
  imports: [Home, HomeBanner, HomeFooter, RouterModule],
  template: `<app-home-banner></app-home-banner>
            <app-home></app-home>
            <app-home-footer></app-home-footer>`,
  styleUrls: ['./app.css'],
})


export class App {
  title = 'Trang chủ';
}
