export const searchReposQuery = `query {
  viewer {
    login
  }
  search(query: "vmeset", type: REPOSITORY, first: 10) {
    edges {
      node {
        ... on User {
          avatarUrl(size: 10)
        }
      }
    }
  }
}`;
