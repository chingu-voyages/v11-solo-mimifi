import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomepageComponent} from './homepage.component';
import {MatDialogModule} from "@angular/material/dialog";

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [HomepageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Homepage component', () => {
    expect(component).toBeTruthy();
  });
});
