import {Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {YearComponent} from '../elements/year/year.component'
import {GenreComponent} from '../elements/genre/genre.component'
import {Location} from '@angular/common';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

// Providers.
import {KitsuAPIGenre} from '../../services/API/KitsuAPIGenre';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
      FormBuilder
  ]
})

export class SearchComponent implements OnInit {
    @Input() path
    @ViewChild(YearComponent) yearComponent: YearComponent
    @ViewChild(GenreComponent) genreComponent: GenreComponent
    initialSearch = {}
    // Search event.
    @Output() search = new EventEmitter()
    // Search by year event.
    @Output() searchByYear = new EventEmitter()
    // Form.
    form : FormGroup
    // Kitsu api provider.
    year: Number
    genre = ''

    @Input() useQueryParams = false;

    ngOnInit() {
        this.route.queryParams
            .subscribe((params) => this.configureSearch(params))
    }

    public configureSearch(params) {
        if (typeof(params['year']) != 'undefined' && params['year'] != null && params['year'] != '') {
            this.year = params['year'];
        }
        else {
            this.year = null;
        }
        if (typeof(params['genre']) != 'undefined' && params['genre'] != null && params['genre'] != '') {
            this.genre = params['genre'];
        }
        else {
            this.genre = null;
        }
        this.emitSearchEvent()
    }

    constructor(private route: ActivatedRoute, private router: Router, private location: Location) {
        this.path = 'explore'
    }

    public getDefaultGenre() {
        return 'action';
    }

    public goToSearch() {
        let query = []
        if (this.year != undefined && +this.year != 0) {
            query.push('year=' + this.year);
        }
        if (this.genre != undefined && this.genre != null && this.genre != '') {
            query.push('genre=' + this.genre);
        }
        this.location.go(this.path + '?' + query.join('&'));
    }

    public onGenreSelect($event) {
        this.setGenre($event)
        this.goToSearch()
        this.emitSearchEvent()
    }

    public onYearSelect($event) {
        this.setYear($event)
        this.goToSearch()
        this.emitSearchByYearEvent()
        this.emitSearchEvent()
    }

    public emitSearchByYearEvent() {
        this.searchByYear.emit(this.getYear())
    }

    public emitSearchEvent() {
        this.search.emit({
            genre: this.getGenre(),
            year: this.getYear()
        })
    }

    private setYear(year) {
        this.year = year;
    }

    private setGenre(genre) {
        this.genre = genre;
    }

    public getYear() {
        return this.year;
    }

    public getGenre() {
        return this.genre;
    }

    public getInitialSearch() {
        return this.initialSearch;
    }

}
