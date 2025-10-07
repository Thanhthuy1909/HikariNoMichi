import { Component } from '@angular/core';
import { CoursesByTopic } from "../courses-by-topic/courses-by-topic";
import { CourseCarousel } from "../course-carousel/course-carousel";
import { LatestExams } from "../latest-exams/latest-exams";

@Component({
  selector: 'app-main-content',
  imports: [CoursesByTopic, CourseCarousel, LatestExams],
  templateUrl: "./main-content.html",
  styleUrl: './main-content.css'
})
export class MainContent {
   
}
