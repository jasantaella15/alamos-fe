import { gql } from '@apollo/client';

export const GET = gql`
  query HomePage {
    homepage {
      seo {
        metaTitle
        metaDescription
        shareImage {
          url
          width
          height
        }
      }
      hero {
        title
      }
    }
  }
`;
