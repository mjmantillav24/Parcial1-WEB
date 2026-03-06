"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CreateActorForm from "../ui/CreateActorForm";
import { createActor } from "../services/actorsService";
import { ActorFormData } from "../validation/actorSchema";
import { useActorsStore } from "../store/useActorsStore";

export default function CreateActorPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const addActor = useActorsStore((state) => state.addActor);

  const handleCreateActor = async (data: ActorFormData) => {
  setIsSubmitting(true);
  setError(null);

  try {
    const actorWithMovies = {
      ...data,
      movies: [], 
    };

    const newActor = await createActor(actorWithMovies);

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
      />

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}