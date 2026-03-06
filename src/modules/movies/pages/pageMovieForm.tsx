"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createMovie } from "../services/moviesService";

import { useMoviesStore } from "../store/useMoviesStore";
import { MovieFormData } from "@/src/shared/validation/actorSchema";
import CreateMovieForm from "../ui/CreateMovieForm";

export default function CreateMoviePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const addMovie = useMoviesStore((state) => state.addMovie);

  const handleCreateMovie = async (data: MovieFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const newMovie = await createMovie(data);

      addMovie(newMovie);

      router.push("/movies");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Movie</h1>

      <CreateMovieForm
        onSubmit={handleCreateMovie}
        isSubmitting={isSubmitting}
      />

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}