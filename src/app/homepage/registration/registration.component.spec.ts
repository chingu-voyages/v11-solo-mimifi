import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegistrationComponent} from './registration.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../auth/auth.service";

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      providers: [{provide: MatDialogRef, useValue: {}},
        {provide: AuthService, useValue: {}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create sig up dialog', () => {
    expect(component).toBeTruthy();
  });
});
