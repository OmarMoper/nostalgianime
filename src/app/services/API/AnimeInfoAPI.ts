import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {AnimeInfo} from '../../models/AnimeInfo';
import { AbstractAPI } from './AbstractAPI'

@Injectable()
/**
 * Make calls to kitsu api.
 *
 * @TODO: settings file with server endpoint. Example https://medium.com/@hasan.hameed/reading-configuration-files-in-angular-2-9d18b7a6aa4
 * @NOTE: should we create different classes for each endpoint?
 */
export class AnimeInfoAPI extends AbstractAPI {
 
  public getEndpoint() {
      // Don't forget final slash is api url :)
      return '/animeinfo/anime/'
  }

  constructor(protected http: Http) {
      super(http)
  }

  /**
   * Get list of genres.
   * 
   * @see requestGenres().
   */
  getInfoByYear(year:Number) {
      return this.requestAnimeInfo(year).map(this.processAnimeInfo);
  }

  /**
   * Request anime info.
   *
   * Call to endpoint '/api/kitsu/genres'.
   */
  private requestAnimeInfo(year) {
      let params = new URLSearchParams();
      params.set('year', year);
      params.set('format', 'json');
      return this.http.get(this.buildUrl(), {search: params})
  }

  public processAnimeInfo(response)  {
    let data = response.json();
    return data.length ? new AnimeInfo(data[0]) : null;
  }

}
