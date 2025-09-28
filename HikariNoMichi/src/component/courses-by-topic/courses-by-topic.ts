import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-by-topic',
  imports: [],
  templateUrl: './courses-by-topic.html',
  styleUrl: './courses-by-topic.css'
})
export class CoursesByTopic {
  courseTopics = [
    { name: 'Grammar', icon: '📖', courseCount: 15 },
    { name: 'Vocabulary', icon: '📝', courseCount: 12 },
    { name: 'Kanji', icon: '漢', courseCount: 10 },
    { name: 'Speaking', icon: '🗣️', courseCount: 8 },
    { name: 'Listening', icon: '👂', courseCount: 6 },
    { name: 'Reading', icon: '📚', courseCount: 9 }
  ];
}
