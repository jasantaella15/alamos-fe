import * as Queries from './queries';
import { Post } from './models';
import BaseService from "../baseService";



class PostService extends BaseService {
    getAll(){
        return this.query<{articles: Post[]}>(Queries.GET_ALL)
    }
}

export default PostService