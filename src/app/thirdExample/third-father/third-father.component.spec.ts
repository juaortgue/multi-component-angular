import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdFatherComponent } from './third-father.component';

describe('ThirdFatherComponent', () => {
  let component: ThirdFatherComponent;
  let fixture: ComponentFixture<ThirdFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
