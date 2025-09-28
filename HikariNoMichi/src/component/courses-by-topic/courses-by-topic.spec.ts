import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesByTopic } from './courses-by-topic';

describe('CoursesByTopic', () => {
  let component: CoursesByTopic;
  let fixture: ComponentFixture<CoursesByTopic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesByTopic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesByTopic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
