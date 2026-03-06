"use client";

import { useEffect } from "react";

import { getMovies } from "../services/moviesService";
import { useMoviesStore } from "../store/useMoviesStore";
import MovieList from "../ui/movieList";


export default function MoviesPage() {
  const { movies, setMovies } = useMoviesStore();

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        console.error("Error loading movies", error);
      }
    };

    loadMovies();
  }, [setMovies]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Movies List</h1>

      <MovieList />
    </div>
  );
}