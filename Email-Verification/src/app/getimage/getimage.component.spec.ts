import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetimageComponent } from './getimage.component';

describe('GetimageComponent', () => {
  let component: GetimageComponent;
  let fixture: ComponentFixture<GetimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
