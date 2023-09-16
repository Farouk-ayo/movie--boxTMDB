export const apiFetch = async () => {
  const response = await fetch("https://api.themoviedb.org/3/movie/top_rated", {
    headers: {
      accept: "application/json",
      Authorization: "Bearer ",
    },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  {
    console.log(response);
    return response.json();
  }
};
