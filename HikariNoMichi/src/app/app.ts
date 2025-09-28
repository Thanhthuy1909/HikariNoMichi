import { Component } from '@angular/core';
import { Header } from '../component/header/header';
import { CourseCarousel } from '../component/course-carousel/course-carousel';
import { CoursesByTopic } from "../component/courses-by-topic/courses-by-topic";
import { LatestExams } from "../component/latest-exams/latest-exams";
import { Contactus } from "../component/contactus/contactus";
import { Footer } from "../component/footer/footer";
@Component({
  selector: 'app-root',
  imports: [Header, CourseCarousel, CoursesByTopic, LatestExams, Contactus, Footer],
  template: `
    <main>
        <app-header></app-header>
        <app-course-carousel></app-course-carousel>
        <app-courses-by-topic></app-courses-by-topic>
        <app-latest-exams></app-latest-exams>
        <app-contactus></app-contactus>
        <app-footer></app-footer>
    </main>`,
  styleUrls: ['./app.css']
})
export class App {

}