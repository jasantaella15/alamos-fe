import * as Queries from './home-queries';
import BaseService from '../baseService';
import { HomePageQuery } from '../operations';
export class HomePageService extends BaseService {
  queries = {
    GET: Queries.GET
  };

  get() {
    return this.runQuery<HomePageQuery>(this.queries.GET);
  }
}

export default HomePageService;
