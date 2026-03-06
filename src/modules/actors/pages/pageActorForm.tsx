"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CreateActorForm from "../ui/CreateActorForm";
import { createActor } from "../services/actorsService";
import { ActorFormData, Movie } from "../../../shared/validation/actorSchema";
import { useActorsStore } from "../store/useActorsStore";
import { getMovies } from "../../movies/services/moviesService";


export default function CreateActorPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const addActor = useActorsStore((state) => state.addActor);

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  const handleCreateActor = async (data: ActorFormData) => {
  setIsSubmitting(true);
  setError(null);
  

  try {
    
    
    const newActor = await createActor(data);

    addActor(newActor);

    router.push("/actors");
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
      <h1 className="text-2xl font-bold mb-6">Create New Actor</h1>

      <CreateActorForm
        onSubmit={handleCreateActor}
        isSubmitting={isSubmitting}
        movies={movies}
      />

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}