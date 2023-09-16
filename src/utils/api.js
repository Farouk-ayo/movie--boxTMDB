export const apiFetch = async () => {
  const response = await fetch("https://api.themoviedb.org/3/movie/top_rated", {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjUxODNjMjRjZjI2YzMyZTBlNWFlZmY4NDdmNjg1NyIsInN1YiI6IjY1MDU3YTYwMzczYWMyMDExYzNkZjhhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qNwSo_FhUGC1Qwe3Lju2MrKz4ONOr16igA3Cw7huCHo",
    },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  {
    return response.json();
  }
};
