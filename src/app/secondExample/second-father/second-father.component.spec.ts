import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondFatherComponent } from './second-father.component';

describe('SecondFatherComponent', () => {
  let component: SecondFatherComponent;
  let fixture: ComponentFixture<SecondFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
