import { Movie, MovieFormData } from "../../../shared/validation/actorSchema";

const API_URL = "http://localhost:3000/api/v1/movies";

export const getMovies = async (): Promise<Movie[]> => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  return res.json();
};

export const getMovieById = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch movie");
  }

  return res.json();
};


export const createMovie = async (data: MovieFormData): Promise<Movie> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create movie");
  }

  return res.json();
};

export const assignPrizeToMovie = async (
  movieId: string,
  prizeId: string
) => {
  const res = await fetch(
    `http://localhost:3000/api/v1/movies/${movieId}/prizes/${prizeId}`,
    {
      method: "POST",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to assign prize to movie");
  }

  return res.json();
};

