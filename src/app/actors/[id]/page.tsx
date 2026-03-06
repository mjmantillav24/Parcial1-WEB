"use client";

import { updateActor } from "@/src/modules/actors/services/actorsService";
import { useActorsStore } from "@/src/modules/actors/store/useActorsStore";
import UpdateActorForm from "@/src/modules/actors/ui/UpdateActorForm";

import { ActorFormData } from "@/src/modules/actors/validation/actorSchema";
import { useParams, useRouter } from "next/navigation";

import { useState } from "react";

export default function EditActorPage() {
  const { id } = useParams();
  const router = useRouter();

  const actors = useActorsStore((state) => state.actors);
  const updateActorStore = useActorsStore((state) => state.updateActor);

  const actor = actors.find((a) => a.id === id);

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!actor) {
    return <p>Actor not found</p>;
  }

  const handleUpdateActor = async (data: ActorFormData) => {
    setIsSubmitting(true);

    try {
      const updated = await updateActor(actor.id, data);

      updateActorStore(updated);

      router.push("/actors");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Actor</h1>

      <UpdateActorForm
        actor={actor}
        onSubmit={handleUpdateActor}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}