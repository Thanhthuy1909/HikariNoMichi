import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftContent } from './left-content';

describe('LeftContent', () => {
  let component: LeftContent;
  let fixture: ComponentFixture<LeftContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
