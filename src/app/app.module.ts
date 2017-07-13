import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchYearComponent } from './forms/search-year/search-year.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import {ShareButtonsModule} from 'ngx-sharebuttons';

// Components.
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SearchComponent } from './forms/search/search.component';
import {GenreComponent} from './forms/elements/genre/genre.component';
import {YearComponent} from './forms/elements/year/year.component';
import {AnimeInfoComponent} from './components/anime-info/anime-info.component';
import {AnimeResultsComponent} from './components/anime-results/anime-results.component';
import {AnimeTeaserComponent} from './components/anime-teaser/anime-teaser.component';
import {AnimeDetailComponent} from './components/anime-detail/anime-detail.component';
import {AnimeAnimatedComponent} from './components/anime-animated/anime-animated.component';
import {NoResultsComponent} from './components/no-results/no-results.component';
import {JqueryScrollTopComponent} from './components/ngx-jquery-scrolltop/ngx-jquery-scrolltop';
import { SiteLinksComponent } from './components/site-links/site-links.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {SidebarMenuComponent} from './components/sidebar-menu/sidebar-menu.component';
import {HamburguerComponent} from './components/hamburguer/hamburguer.component';
import {PageOverlayComponent} from './components/page-overlay/page-overlay.component';
import { SearchTextComponent } from './forms/search-text/search-text.component';

// Providers.
import {KitsuAPIGenre} from './services/API/KitsuAPIGenre';
import {KitsuAPIAnime} from './services/API/KitsuAPIAnime';
import {KitsuAPIAnimeAnimated} from './services/API/KitsuAPIAnimeAnimated';
import {AnimeInfoAPI} from './services/API/AnimeInfoAPI';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    SearchComponent,
    AnimeInfoComponent,
    AnimeResultsComponent,
    AnimeTeaserComponent,
    AnimeDetailComponent,
    NoResultsComponent,
    YearComponent,
    GenreComponent,
    JqueryScrollTopComponent,
    SearchYearComponent,
    SearchTextComponent,
    MainMenuComponent,
    AnimeAnimatedComponent,
    SiteLinksComponent,
    SidebarMenuComponent,
    HamburguerComponent,
    PageOverlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    AngularMultiSelectModule,
    InfiniteScrollModule,
    YoutubePlayerModule,
    Angular2FontawesomeModule,
    ShareButtonsModule.forRoot()
  ],
  providers: [
    KitsuAPIGenre,
    AnimeInfoAPI,
    KitsuAPIAnime,
    KitsuAPIAnimeAnimated
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
