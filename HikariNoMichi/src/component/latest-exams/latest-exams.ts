import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-exams',
  imports: [],
  templateUrl: './latest-exams.html',
  styleUrl: './latest-exams.css'
})
export class LatestExams {

  upcomingExams = [
    {
      name: 'JLPT N3 Exam',
      description: 'Japanese Language Proficiency Test Level N3',
      month: 'MAR',
      day: '15',
      location: 'Tokyo',
      fee: '¥7,000'
    },
    {
      name: 'EJU Spring Session',
      description: 'Examination for Japanese University Admission',
      month: 'APR',
      day: '20',
      location: 'Osaka',
      fee: '¥10,000'
    },
    {
      name: 'JLPT N2 Exam',
      description: 'Japanese Language Proficiency Test Level N2',
      month: 'MAY',
      day: '12',
      location: 'Kyoto',
      fee: '¥7,500'
    }
  ];
}
