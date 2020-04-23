import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogCartComponent } from './dog-cart.component';

describe('DogCartComponent', () => {
  let component: DogCartComponent;
  let fixture: ComponentFixture<DogCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
