import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthService} from "../repository/auth.service";

export enum PageName {
  DASHBOARD = 'New Trip',
  TASKLIST = 'New Category'
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
}
