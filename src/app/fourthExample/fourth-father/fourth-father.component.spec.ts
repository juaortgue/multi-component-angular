import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthFatherComponent } from './fourth-father.component';

describe('FourthFatherComponent', () => {
  let component: FourthFatherComponent;
  let fixture: ComponentFixture<FourthFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
