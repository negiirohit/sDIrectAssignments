import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawnDetailComponent } from './lawn-detail.component';

describe('LawnDetailComponent', () => {
  let component: LawnDetailComponent;
  let fixture: ComponentFixture<LawnDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawnDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
