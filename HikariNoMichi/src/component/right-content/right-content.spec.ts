import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightContent } from './right-content';

describe('RightContent', () => {
  let component: RightContent;
  let fixture: ComponentFixture<RightContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
