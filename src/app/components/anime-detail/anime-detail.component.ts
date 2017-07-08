import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Providers.
import {KitsuAPIAnime} from '../../services/API/KitsuAPIAnime';

const ANIME_DETAIL_PARAM = 'animeId';

@Component({
  selector: 'anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss']
})

export class AnimeDetailComponent implements OnInit {
    _id
    currentUrl
    @Input() 
    set id (id) {
        this._id = id;
        this.fetchAnime(id);
    }
    get() {
        return this._id;
    }
    anime

    constructor(public kitsuAPIAnime: KitsuAPIAnime, private route: ActivatedRoute) {
        this.currentUrl = document.location.href;
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        if (typeof(params[ANIME_DETAIL_PARAM]) != 'undefined' && +params[ANIME_DETAIL_PARAM] > 0) {
          this.id = +params[ANIME_DETAIL_PARAM]; // (+) converts string 'id' to a number
        }
      });
    }

    public fetchAnime(id) {
        let include = [
            'streamingLinks',
            'animeStaff.person',
            'animeProductions.producer',
            'genres',
            'mappings'
        ];
        this.kitsuAPIAnime.getAnime(id, {'include': include.join(',')}).subscribe((anime) => {
            this.anime = anime;
        })
    }

}
