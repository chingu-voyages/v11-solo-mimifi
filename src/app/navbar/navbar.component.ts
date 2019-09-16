import {Component, EventEmitter, Input, Output} from '@angular/core';

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
  @Output() public clicked = new EventEmitter();

  openAddDialog() {
    this.clicked.emit();
  }
}
