export const queryGetRepos = (searchStr: string) => `query {
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
}`;
