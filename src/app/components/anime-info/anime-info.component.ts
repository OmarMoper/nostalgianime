import {Component, Input} from '@angular/core';

// Providers.
import {AnimeInfoAPI} from '../../services/API/AnimeInfoAPI';

@Component({
  selector: 'anime-info',
  templateUrl: './anime-info.component.html',
  styleUrls: ['./anime-info.component.scss']
})

export class AnimeInfoComponent {

    // Simple way to wait for variable changes.
    // @NOTE: this works with objects too wiiiii!
    @Input() 

    set year (year: Number) {
        this._year = year
        this.fetchAnimeInfo()
    }
    
    get year() {
        return this._year
    }

    _year: Number
    animeInfoAPI:AnimeInfoAPI
    animeInfo: Object
    
    constructor(animeInfoAPI: AnimeInfoAPI) {
        this.animeInfoAPI = animeInfoAPI
        this.year = this.getDefaultYear()
        this.fetchAnimeInfo()
    }

    public getDefaultYear() {
        return 1980;
    }

    public fetchAnimeInfo() {
        this.animeInfoAPI.getInfoByYear(this.year).subscribe((data) => {
            this.animeInfo = data
        })
    }

}
