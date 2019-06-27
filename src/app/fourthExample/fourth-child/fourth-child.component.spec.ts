import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthChildComponent } from './fourth-child.component';

describe('FourthChildComponent', () => {
  let component: FourthChildComponent;
  let fixture: ComponentFixture<FourthChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
