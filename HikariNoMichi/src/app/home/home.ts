import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { Exam } from '../../models/exam';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  siteTitle = 'Nihongo Exam Prep';


  // sample logo text used in banner (SVG provided in HTML)


  latestCourses: Course[] = [
    { id: 1, title: 'JLPT N5 Complete Course', topic: 'JLPT', level: 'N5' },
    { id: 2, title: 'Business Japanese Basics', topic: 'Business', level: 'Intermediate' },
    { id: 3, title: 'Hiragana & Katakana Mastery', topic: 'Writing', level: 'Beginner' },
    { id: 4, title: 'JLPT N3 Grammar Deep-Dive', topic: 'JLPT', level: 'N3' },
    { id: 5, title: 'Kanji 300 Essentials', topic: 'Kanji', level: 'All' }
  ];


  coursesByTopic: { [topic: string]: Course[] } = {};


  latestExams: Exam[] = [
    { id: 1, title: 'Mock JLPT N5 - April 2026', date: '2026-04-12', level: 'N5' },
    { id: 2, title: 'Mock JLPT N3 - June 2026', date: '2026-06-07', level: 'N3' }
  ];


  contact = {
    email: 'support@nihongo-exam.example',
    phone: '+66 2-123-4567',
    address: '123 Sakura St., Bangkok, Thailand'
  };


  constructor() {
    this.groupCourses();
  }


  private groupCourses() {
    this.coursesByTopic = {};
    for (const c of this.latestCourses) {
      if (!this.coursesByTopic[c.topic]) this.coursesByTopic[c.topic] = [];
      this.coursesByTopic[c.topic].push(c);
    }
  }
}
