import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "course-carousel.html",
  styleUrl: "course-carousel.css"
})
export class CourseCarousel {
  currentSlide = 0;

  latestCourses = [
    {
      title: 'JLPT N5 Complete Course',
      description: 'Master basic Japanese grammar, vocabulary, and kanji for JLPT N5',
      level: 'Beginner',
      duration: '8 weeks',
      price: '¥15,000',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg'
    },
    {
      title: 'Business Japanese Intensive',
      description: 'Professional Japanese for workplace communication and business meetings',
      level: 'Intermediate',
      duration: '12 weeks',
      price: '¥25,000',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg'
    },
    {
      title: 'Kanji Mastery Program',
      description: 'Comprehensive kanji learning from basics to advanced levels',
      level: 'All Levels',
      duration: '16 weeks',
      price: '¥20,000',
      image: 'https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg'
    }
  ];

  


  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.latestCourses.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.latestCourses.length - 1 : this.currentSlide - 1;
  }
}