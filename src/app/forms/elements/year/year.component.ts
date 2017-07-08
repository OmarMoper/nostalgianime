import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {MultiselectDropdown} from '../../../models/MultiselectDropdown'

@Component({
  selector: 'select-year',
  template: `
    <angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" 
    [settings]="dropdownSettings"
    (onSelect)="onItemSelect($event)"
    (onDeSelect)="onItemDeSelect()" >
    </angular2-multiselect>
  `
})

export class YearComponent extends MultiselectDropdown implements OnInit {
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    @Output('yearSelect') select = new EventEmitter();

    public getDefaultYear() {
        return new Date().getFullYear();
    }

    ngOnInit() {
        this.dropdownSettings = {
            singleSelection: true, 
            text:"Select a year",
            enableSearchFilter: false,
            classes:"multiselect-dropdown year"
        }
        this.dropdownList = this.getYearsList()
        this.setDefaultValue()
    }

    public getYearsList() {
       let year_from = 1970;
       let year_to = this.getDefaultYear()
       let years = [];
       let year = year_from;
       for (year; year <= year_to; year++) {
           years.push({
               id: year,
               itemName: year
           });
       }
       return years;
    }

    public onItemSelect($event) {
        this.select.emit($event.id)
    }

    public onItemDeSelect() {
        this.select.emit()
    }

    public getSelector() {
        return '.multiselect-dropdown.year .pure-checkbox';
    }
}
