"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { actorSchema, ActorFormData } from "../validation/actorSchema";

interface CreateActorFormProps {
  onSubmit: SubmitHandler<ActorFormData>;
  isSubmitting: boolean;
}

export default function CreateActorForm({
  onSubmit,
  isSubmitting,
}: CreateActorFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ActorFormData>({
    resolver: zodResolver(actorSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto flex flex-col gap-4 p-6 border rounded-lg bg-gray-50 shadow-sm"
    >
      <input
        {...register("name")}
        placeholder="Name"
        className="p-2 border rounded"
      />
      {errors.name && (
        <span className="text-red-500 text-sm">{errors.name.message}</span>
      )}

      <input
        {...register("photo")}
        placeholder="Photo URL"
        className="p-2 border rounded"
      />
      {errors.photo && (
        <span className="text-red-500 text-sm">{errors.photo.message}</span>
      )}

      <input
        {...register("nationality")}
        placeholder="Nationality"
        className="p-2 border rounded"
      />
      {errors.nationality && (
        <span className="text-red-500 text-sm">
          {errors.nationality.message}
        </span>
      )}

      <input
        type="date"
        {...register("birthDate")}
        className="p-2 border rounded"
      />
      {errors.birthDate && (
        <span className="text-red-500 text-sm">{errors.birthDate.message}</span>
      )}

      <textarea
        {...register("biography")}
        placeholder="Biography"
        rows={4}
        className="p-2 border rounded"
      />
      {errors.biography && (
        <span className="text-red-500 text-sm">{errors.biography.message}</span>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700"
      >
        {isSubmitting ? "Creating..." : "Create Actor"}
      </button>
    </form>
  );
}