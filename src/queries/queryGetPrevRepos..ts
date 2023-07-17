export const queryGetPrevRepos = (searchStr: string, before: string | null | undefined) => `query {
    search(query: "${searchStr}", type: REPOSITORY, last: 10${before ? `, before: "${before}"` : ""}) {
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