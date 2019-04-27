import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerDetailComponent } from './seeker-detail.component';

describe('SeekerDetailComponent', () => {
  let component: SeekerDetailComponent;
  let fixture: ComponentFixture<SeekerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
