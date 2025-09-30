import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  imports: [],
  templateUrl: "./main-content.html",
  styleUrl: './main-content.css'
})
export class MainContent {
  
  courseTopics = [
    { name: 'Grammar', icon: '📖', courseCount: 15 },
    { name: 'Vocabulary', icon: '📝', courseCount: 12 },
    { name: 'Kanji', icon: '漢', courseCount: 10 },
    { name: 'Speaking', icon: '🗣️', courseCount: 8 },
    { name: 'Listening', icon: '👂', courseCount: 6 },
    { name: 'Reading', icon: '📚', courseCount: 9 }
  ];

  latestCourses = [
    {
      title: 'JLPT N5 Complete Course',
      description: 'Master basic Japanese grammar, vocabulary, and kanji for JLPT N5',
      level: 'Beginner',
      duration: '8 weeks',
      price: '¥15,000',
      image: '../../assets/logo.png'
    },
    {
      title: 'Business Japanese Intensive',
      description: 'Professional Japanese for workplace communication and business meetings',
      level: 'Intermediate',
      duration: '12 weeks',
      price: '¥25,000',
      image: '../../assets/logo.png'
    },
    {
      title: 'Kanji Mastery Program',
      description: 'Comprehensive kanji learning from basics to advanced levels',
      level: 'Pre Master',
      duration: '16 weeks',
      price: '¥20,000',
      image: '../../assets/logo.png'
    },
    {
      title: 'Kanji Mastery Program',
      description: 'Comprehensive kanji learning from basics to advanced levels',
      level: 'Master',
      duration: '16 weeks',
      price: '¥20,000',
      image: '../../assets/logo.png'
    },
    {
      title: 'Kanji Mastery Program',
      description: 'Comprehensive kanji learning from basics to advanced levels',
      level: 'All levels',
      duration: '16 weeks',
      price: '¥20,000',
      image: '../../assets/logo.png'
    }
  ];

  currentSlide = 0;
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.latestCourses.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.latestCourses.length - 1 : this.currentSlide - 1;
  }
}
