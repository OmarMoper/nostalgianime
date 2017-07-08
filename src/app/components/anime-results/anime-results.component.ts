import {Component, Input, OnInit} from '@angular/core';
// Providers.
import {KitsuAPIAnime} from '../../services/API/KitsuAPIAnime';

@Component({
  selector: 'anime-results',
  templateUrl: './anime-results.component.html',
  styleUrls: ['./anime-results.component.scss']
})

export class AnimeResultsComponent  implements OnInit {

    _search
    @Input() orderBy = ''
    @Input() limit = 20;
    @Input() useInfiniteScroll = true
    currentOffset = 0;
    animeList: Array<Object> = []
    init = false
    loaded = false
    @Input()
    set search (search) {
        this._search = search
        if (this.init) {
            this.fetchInitialList()
        }
    }
   
    get search() {
        return this._search
    }

    constructor(public kitsuAPIAnime: KitsuAPIAnime) {
    }

    public makeSearch(search) {
        this._search.orderBy = this.orderBy;
        this._search.limit = this.limit;
        return this.kitsuAPIAnime.searchAnime(this.search);
    }
    
    ngOnInit() {
        this.init = true;
        if (this.searchInitialized()) {
            this.fetchInitialList();
        }
    }

    public searchInitialized() {
        return this.search != undefined;
    }

    public fetchInitialList() {
        this.makeSearch(this.search).subscribe((animeList) => {
            this.loaded = true
            this.setAnimeList(animeList)
        })
    }

    public setAnimeList(animeList) {
        this.animeList = animeList.length > 0 ?animeList : [];   
    }

    public addMore() {
        this.currentOffset += 20;
        let search = this.search;
        search.offset = this.currentOffset;
        this.makeSearch(this.search).subscribe((animeList) => {
            if (animeList.length > 0) {
                this.animeList = this.animeList.concat(animeList)
            }
        })
    }

}
