export const mutationRemoveStar = (qureStr: string) => `mutation {
  removeStar(input:{starrableId:"${qureStr}"}) {
    starrable {
      id
    }
  }
}`;
