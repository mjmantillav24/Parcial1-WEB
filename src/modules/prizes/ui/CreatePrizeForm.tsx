"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PrizeFormData, prizeSchema } from "@/src/shared/validation/actorSchema";


interface Props {
  onSubmit: SubmitHandler<PrizeFormData>;
  isSubmitting: boolean;
}

export default function CreatePrizeForm({
  onSubmit,
  isSubmitting,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PrizeFormData>({
    resolver: zodResolver(prizeSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      <input
        {...register("name")}
        placeholder="Prize Name"
        className="border p-2 w-full"
      />

      {errors.name && <p>{errors.name.message}</p>}

      <input
        {...register("category")}
        placeholder="Category"
        className="border p-2 w-full"
      />

      <input
        type="number"
        {...register("year", { valueAsNumber: true })}
        placeholder="Year"
        className="border p-2 w-full"
      />

      <select {...register("status")} className="border p-2 w-full">
        <option value="">Select status</option>
        <option value="won">Won</option>
        <option value="nominated">Nominated</option>
      </select>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Prize
      </button>
    </form>
  );
}