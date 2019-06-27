import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhFatherComponent } from './seventh-father.component';

describe('SeventhFatherComponent', () => {
  let component: SeventhFatherComponent;
  let fixture: ComponentFixture<SeventhFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
