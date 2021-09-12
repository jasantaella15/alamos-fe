import Link from "next/link";
import { Modals } from "../models/modals";
import { ApolloService } from "@alamos-fe/graphql-service"

/* eslint-disable-next-line */
export interface PostProps {
  posts : any
}

const Index: React.FC<PostProps> = ({posts}) =>  {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            
          <Link
              href={`/?postId=1&modal=${Modals.post_view}`}
              as={`/post/1`}
            >
            <a
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-700"
            >
              Get started
            </a>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-primary-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      {posts?.map(post => <h1>{post.title}</h1>)}
    </div>
  );
}

export async function getStaticProps(ctx){
  const { data , loading, error }  = await ApolloService.post.getAll();

  return {
    props:{
      posts : data.articles
    }
  }
}

export default Index;
