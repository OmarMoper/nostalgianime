import 'rxjs/add/operator/map';
import { AbstractAPI } from './AbstractAPI'
import { HttpClient } from '@angular/common/http';

/**
 * Make calls to kitsu api.
 */
export abstract class KitsuAPI extends AbstractAPI {

  constructor(protected http: HttpClient) {
      super(http)
  }

    public getData(response, callback) {
        console.log(response);
        var data_data = response.data;
        // @WORKAROUND: add 'included' to data!
        // @TODO: refactor!
        data_data.included = response.included;
        return typeof(data_data[0]) != 'undefined' ? this.getEntities(data_data, callback) : callback(data_data);
    }

    public getEntities(data, callback) {
        let entities_processed = []
        for (let entity of data) {
            entities_processed.push(callback(entity));
        }
        return entities_processed;
    }

    public getList() {
        return this.makeRequestList();
    }

  protected makeRequestSingle(id, params = {}) {
      params['id'] = id;
      return this.http.get(this.buildUrl(params)).map(
        (res) => {
            return this.getData(res, this.convertEntity)
        }
      )
  }
  protected makeRequestList(params = {}) {
      return this.http.get(this.buildUrl(params)).map(
        (res) => {
            return this.getData(res, this.convertEntity)
        }
      )
  }

  abstract convertEntity(data)

}
