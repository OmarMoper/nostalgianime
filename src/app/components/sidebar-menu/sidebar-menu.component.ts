import {Component, Output, EventEmitter} from '@angular/core';

// @NOTE: this component doesn't allow add directly a input because is
// intended to be used for list of anime, so that the parent component
// will provide the list.

@Component({
  selector: 'sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})

export class SidebarMenuComponent {
    @Output() clickLink = new EventEmitter();
}
