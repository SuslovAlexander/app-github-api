export const starredRepos = `query {
    viewer {
      starredRepositories(first: 10) {
        edges {
          node {
            name
            id
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }`;
