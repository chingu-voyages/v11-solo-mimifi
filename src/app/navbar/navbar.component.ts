import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../repository/auth.service";
import {Observable, Subject} from "rxjs";
import {User} from "firebase";
import {takeUntil} from "rxjs/operators";

export enum PageName {
  DASHBOARD = 'New Trip',
  TASKLIST = 'New Category'
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public authState: Observable<User>;
  public _destroy: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.authState = this.authenticationService.authState.pipe(takeUntil(this._destroy));
  }

  @Input() public pageName: PageName;
  @Output() public clicked = new EventEmitter<void>();

  constructor(private authenticationService: AuthService) {
  }

  public openAddDialog() {
    this.clicked.emit();
  }

  public signOut() {
    this.authenticationService.signOut()
  }

  ngOnDestroy(): void {
    this._destroy.next(true);
  }
}
