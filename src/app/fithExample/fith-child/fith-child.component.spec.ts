import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FithChildComponent } from './fith-child.component';

describe('FithChildComponent', () => {
  let component: FithChildComponent;
  let fixture: ComponentFixture<FithChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FithChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FithChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
