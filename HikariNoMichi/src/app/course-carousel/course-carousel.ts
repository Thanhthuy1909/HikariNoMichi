import { Component ,ElementRef,Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-course-carousel',
  imports: [],
  templateUrl: './course-carousel.html',
  styleUrl: './course-carousel.css'
})
export class CourseCarousel {
  @Input() items: any[] = [];
  @ViewChild('scroller') scroller!: ElementRef<HTMLDivElement>;

  scroll(delta: number) {
    if (!this.scroller) return;
    this.scroller.nativeElement.scrollBy({ left: delta, behavior: 'smooth' });
  }
}
