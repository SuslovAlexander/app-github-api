export const queryGetNextRepos = (searchStr: string, after: string | null | undefined) => `query {
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