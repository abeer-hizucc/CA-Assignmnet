import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EKYC2ndFormComponent } from './e-kyc2nd-form.component';

describe('EKYC2ndFormComponent', () => {
  let component: EKYC2ndFormComponent;
  let fixture: ComponentFixture<EKYC2ndFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EKYC2ndFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EKYC2ndFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
