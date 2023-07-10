export const fetchWrap = (token: string | null, query: string): any => {
  fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({
      query: query,
    }),
  });
};
