import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EKYCFormComponent } from './e-kyc-form.component';

describe('EKYCFormComponent', () => {
  let component: EKYCFormComponent;
  let fixture: ComponentFixture<EKYCFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EKYCFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EKYCFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
