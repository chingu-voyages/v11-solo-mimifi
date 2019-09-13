import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SignInComponent} from './sign-in.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../auth/auth.service";

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let mockDialogRef = {
      close: () => {
      }
  };
  let dialogRef: MatDialogRef<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      providers: [{provide: MatDialogRef, useValue: mockDialogRef},
        {provide: AuthService, useValue: {}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dialogRef = TestBed.get(MatDialogRef)
  });

  it('should create sign in dialog', () => {
    expect(component).toBeTruthy();
  });

  it('should call the function to close signIn dialog', () => {
    spyOn(dialogRef, 'close');
    component.onCancelClick();
    expect(dialogRef.close).toHaveBeenCalled()
  });
});
