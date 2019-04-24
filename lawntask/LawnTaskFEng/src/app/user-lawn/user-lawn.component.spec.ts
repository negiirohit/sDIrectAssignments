import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLawnComponent } from './user-lawn.component';

describe('UserLawnComponent', () => {
  let component: UserLawnComponent;
  let fixture: ComponentFixture<UserLawnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLawnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
