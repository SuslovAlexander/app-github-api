export const queryGetFavorite = () => `{
  viewer {
    starredRepositories(first: 10) {
      edges {
        node {
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
