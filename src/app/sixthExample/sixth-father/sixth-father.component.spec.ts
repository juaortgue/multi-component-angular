import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthFatherComponent } from './sixth-father.component';

describe('SixthFatherComponent', () => {
  let component: SixthFatherComponent;
  let fixture: ComponentFixture<SixthFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
