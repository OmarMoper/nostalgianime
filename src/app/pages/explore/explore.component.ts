import {Component, ViewChild } from '@angular/core';
import {AnimeResultsComponent} from '../../components/anime-results/anime-results.component'

@Component({
  selector: 'explore',
  styleUrls: ['./explore.component.scss'],
  templateUrl: './explore.component.html'
})

export class ExploreComponent {

    @ViewChild(AnimeResultsComponent) animeResultsComponent: AnimeResultsComponent
    onSearch(data) {
        this.animeResultsComponent.search = data
    }

    onSearchByYear(data) {
//        this.animeInfoComponent.year = data
    }

}
