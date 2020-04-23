import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetterComponent } from './user-getter.component';

describe('UserGetterComponent', () => {
  let component: UserGetterComponent;
  let fixture: ComponentFixture<UserGetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
