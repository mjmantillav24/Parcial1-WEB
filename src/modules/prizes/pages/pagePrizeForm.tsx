"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePrizesStore } from "../store/usePrizesStore";
import { PrizeFormData } from "@/src/shared/validation/actorSchema";
import { createPrize } from "../services/prizesService";
import CreatePrizeForm from "../ui/CreatePrizeForm";



export default function CreatePrizePage() {

  const router = useRouter();

  const addPrize = usePrizesStore((state) => state.addPrize);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreatePrize = async (data: PrizeFormData) => {

    setIsSubmitting(true);
    setError(null);

    try {

      const newPrize = await createPrize(data);

      addPrize(newPrize);

      router.push("/prizes");

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

      <h1 className="text-2xl font-bold mb-6">
        Create Prize
      </h1>

      <CreatePrizeForm
        onSubmit={handleCreatePrize}
        isSubmitting={isSubmitting}
      />

      {error && (
        <p className="text-red-500 mt-4">
          {error}
        </p>
      )}

    </div>
  );
}