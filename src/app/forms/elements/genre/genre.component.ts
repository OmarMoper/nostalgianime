import {Component, OnInit, ViewEncapsulation, EventEmitter, Output} from '@angular/core';
import {MultiselectDropdown} from '../../../models/MultiselectDropdown'

// Providers.
import {KitsuAPIGenre} from '../../../services/API/KitsuAPIGenre';

@Component({
  selector: 'select-genre',
  template: `
    <angular2-multiselect [data]="dropdownList" [(ngModel)]="selectedItems" 
    [settings]="dropdownSettings"
    (onDeSelect)="onItemDeSelect()"
    (onSelect)="onItemSelect($event)">
    </angular2-multiselect>
  `
})

export class GenreComponent extends MultiselectDropdown implements OnInit {
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    @Output('genreSelect') select = new EventEmitter();
    kitsuAPIGenre: KitsuAPIGenre

    constructor(kitsuAPI: KitsuAPIGenre) {
        super();
        this.kitsuAPIGenre = kitsuAPI
        this.fetchGenres()
    }

    /**
     * Call Kitsu api to get all genres.
     */
    public fetchGenres() {
        this.kitsuAPIGenre.getList().subscribe((genres) => {
            this.addGenres(genres)
            this.setDefaultValue()
        })
    }

    public addGenres(genres) {
        for (let i = 0; i < genres.length; i++) {
            this.dropdownList.push(
                {
                    id: genres[i].getSlug(),
                    itemName: genres[i].getName()
                }
            );
        }
    }

    ngOnInit() {
        this.dropdownSettings = {
            singleSelection: true, 
            text:"Choose a genre",
            enableSearchFilter: false,
            classes:"multiselect-dropdown genre"
        }
    }

    public onItemSelect($event) {
        this.select.emit($event);
    }

    public onItemDeSelect() {
        this.select.emit();
    }

    public getSelector() {
        return '.multiselect-dropdown.genre .pure-checkbox';
    }

}
