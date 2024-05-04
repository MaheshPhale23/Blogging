import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmypostComponent } from './viewmypost.component';

describe('ViewmypostComponent', () => {
  let component: ViewmypostComponent;
  let fixture: ComponentFixture<ViewmypostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewmypostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewmypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
