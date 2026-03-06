import { create } from "zustand";
import { Movie } from "../../../shared/validation/actorSchema";


interface MoviesState {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  addMovie: (movie: Movie) => void;
}

export const useMoviesStore = create<MoviesState>((set) => ({
  movies: [],

  setMovies: (movies) => set({ movies }),

  addMovie: (movie) =>
    set((state) => ({
      movies: [...state.movies, movie],
    })),
}));

