import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestExams } from './latest-exams';

describe('LatestExams', () => {
  let component: LatestExams;
  let fixture: ComponentFixture<LatestExams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestExams]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestExams);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
