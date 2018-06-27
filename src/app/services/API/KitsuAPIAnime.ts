import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Anime} from '../../models/Anime';
import { KitsuAPI } from './KitsuAPI'
import { HttpClient } from '@angular/common/http';

@Injectable()
/**
 * Get genres from kitsu api.
 */
export class KitsuAPIAnime extends KitsuAPI {

  constructor(protected http: HttpClient) {
      super(http)
  }

  public getAnime(id, params = {}) {
      return this.makeRequestSingle(id, params)
  }

  public getEndpoint() {
      return '/anime'
  }

  public convertEntity(data) {
    return new Anime(data)
  }

  public searchAnime(data) {
    return this.makeRequestList(data)
  }

  public buildUrl(data) {
    let querystring = [];
    let url = this.getEndpointUrl()
    if (typeof(data.id) != 'undefined' && data.id != null) {
        url += '/' + data.id + '/'
    }
    if (typeof(data.orderBy) != 'undefined' && data.orderBy != '') {
        querystring.push('sort=' + data.orderBy)
    }
    if (typeof(data.include) != 'undefined' && data.include != null) {
        querystring.push('include=' + data.include)
    }
    if (typeof(data.text) != 'undefined' && data.text != null) {
        querystring.push('filter[text]=' + data.text)
    }
    if (typeof(data.year) != 'undefined' && data.year != null) {
        querystring.push('filter[year]=' + data.year)
    }
    if (typeof (data.genre) != 'undefined' && data.genre != null && data.genre.length) {
        querystring.push('filter[genres]=' + data.genre)
    }
    if (typeof (data.offset) != 'undefined' && data.offset != null) {
        querystring.push('page[offset]=' + data.offset)
    }
    if (typeof(data.limit) != 'undefined' && data.limit != null) {
        querystring.push('page[limit]=' + data.limit)
    }
    return url + '?' + querystring.join('&')
  }

}
