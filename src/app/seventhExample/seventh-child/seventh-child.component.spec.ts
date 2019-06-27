import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhChildComponent } from './seventh-child.component';

describe('SeventhChildComponent', () => {
  let component: SeventhChildComponent;
  let fixture: ComponentFixture<SeventhChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
