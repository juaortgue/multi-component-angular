import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FithFatherComponent } from './fith-father.component';

describe('FithFatherComponent', () => {
  let component: FithFatherComponent;
  let fixture: ComponentFixture<FithFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FithFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FithFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
