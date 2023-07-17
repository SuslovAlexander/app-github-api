/* export const queryGetRepos = (searchStr: string) => `query {
  search(query: "${searchStr}", type: REPOSITORY, first: 10) {
    edges {
      node {
        ... on Repository {
          name
          id
          primaryLanguage {
            name
          }
          viewerHasStarred
        }
      }
    }
  }
}`; */
export const queryGetRepos = (searchStr: string, after?: string) => `query {
  search(query: "${searchStr}", type: REPOSITORY, first: 10${after ? `, after: "${after}"` : ""}) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        ... on Repository {
          name
          id
          primaryLanguage {
            name
          }
          viewerHasStarred
          url
        }
      }
    }
  }
}`;
