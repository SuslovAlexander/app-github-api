export const mutationAddStar = (qureStr: string) => `mutation {
  addStar(input:{starrableId: "${qureStr}"}) {  
    starrable {
          stargazers {
            totalCount
          } 
          viewerHasStarred
        }
      }}`;
