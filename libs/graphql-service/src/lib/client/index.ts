import { ApolloClient, InMemoryCache } from '@apollo/client';
import gql from 'graphql-tag';
import { PostService } from "../services";

class ApolloService {
    private static instance: ApolloService;
    private static connection = new ApolloClient({
        uri: 'https://alamos-be.herokuapp.com/graphql',
        cache: new InMemoryCache(),
        connectToDevTools: true
    });
    post: PostService;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {
        this.post = new PostService (this.runQuery)
    }

    private runQuery<T>(query : string, variables? : any){
        return ApolloService.connection.query<T>({query: gql(query), variables})
    }

      /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
       public static getInstance(): ApolloService {
        if (!ApolloService.instance) {
            ApolloService.instance = new ApolloService();
        }
        return ApolloService.instance;
    }

}

export default ApolloService.getInstance();