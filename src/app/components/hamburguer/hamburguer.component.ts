import {Component, Input, Output, EventEmitter} from '@angular/core';

// @NOTE: this component doesn't allow add directly a input because is
// intended to be used for list of anime, so that the parent component
// will provide the list.

const BARS_ICON = 'bars';
const BARS_ICON_COLOR = 'black';
const CROSS_ICON = 'times';
const CROSS_ICON_COLOR = 'white';

@Component({
  selector: 'hamburguer',
  templateUrl: './hamburguer.component.html',
  styleUrls: ['./hamburguer.component.scss']
})

export class HamburguerComponent {
    icon
    color

    @Output() open = new EventEmitter()
    // Search by year event.
    @Output() close = new EventEmitter()

    constructor() {
        this.icon = BARS_ICON;
        this.color = BARS_ICON_COLOR;
    }

    onClick($event) {
        this.toggleIcon();
    }
    
    toggleIcon() {
        if (this.icon == BARS_ICON) {
            this.open.emit();
            this.icon = CROSS_ICON;
            this.color = CROSS_ICON_COLOR;
        }
        else if (this.icon == CROSS_ICON) {
            this.close.emit();
            this.icon = BARS_ICON;
            this.color = BARS_ICON_COLOR;
        }
    }

}
