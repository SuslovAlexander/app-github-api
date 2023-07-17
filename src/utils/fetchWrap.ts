export const fetchWrap = async (
  token: string | null,
  query: string
): Promise<Response> => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({
      query: query,
    }),
  });
  return response;
};
