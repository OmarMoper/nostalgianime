
import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { AnimeDetailComponent} from './components/anime-detail/anime-detail.component';
import {AboutComponent} from './pages/about/about.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'about', component: AboutComponent},
  { path: 'anime/:animeId',      component: AnimeDetailComponent },
];
