import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Genre } from '../../models/Genre';
import { KitsuAPI } from './KitsuAPI'
import { HttpClient } from '@angular/common/http';

@Injectable()
/**
 * Get genres from kitsu api.
 */
export class KitsuAPIGenre extends KitsuAPI {

  constructor(protected http: HttpClient) {
      super(http)
  }

  public getEndpoint() {
      return '/genres?page[limit]=100&format=json&sort=name'
  }

  public convertEntity(data) {
    return new Genre(data)
  }

}
