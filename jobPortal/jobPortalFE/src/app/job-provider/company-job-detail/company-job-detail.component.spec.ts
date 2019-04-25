import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobDetailComponent } from './company-job-detail.component';

describe('CompanyJobDetailComponent', () => {
  let component: CompanyJobDetailComponent;
  let fixture: ComponentFixture<CompanyJobDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyJobDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyJobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
