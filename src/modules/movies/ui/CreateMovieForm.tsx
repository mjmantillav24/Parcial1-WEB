"use client";

import { MovieFormData } from "@/src/shared/validation/actorSchema";
import { useState } from "react";


interface Props {
  onSubmit: (data: MovieFormData) => Promise<void>;
  isSubmitting: boolean;
}

export default function CreateMovieForm({ onSubmit, isSubmitting }: Props) {

  const [formData, setFormData] = useState<MovieFormData>({
    title: "",
    poster: "",
    duration: 0,
    country: "",
    releaseDate: "",
    popularity: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "duration" || name === "popularity"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md"
    >
         <label className="font-semibold">Title</label>
      <input
        name="title"
        placeholder="Movie title"
        value={formData.title}
        onChange={handleChange}
        className="border p-2 rounded"
      />

        <label className="font-semibold">Poster URL</label>

      <input
        name="poster"
        placeholder="Poster URL"
        value={formData.poster}
        onChange={handleChange}
        className="border p-2 rounded"
      />
    <label className="font-semibold">Duration</label>
      <input
        name="duration"
        type="number"
        placeholder="Duration (minutes)"
        value={formData.duration}
        onChange={handleChange}
        className="border p-2 rounded"
      />
         <label className="font-semibold">Country</label>
      <input
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <label className="font-semibold">Release Date</label>

      <input
        name="releaseDate"
        type="date"
        value={formData.releaseDate}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <label className="font-semibold">Popularity</label>
      <input
        name="popularity"
        type="number"
        placeholder="Popularity"
        value={formData.popularity}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white p-2 rounded"
      >
        {isSubmitting ? "Creating..." : "Create Movie"}
      </button>
    </form>
  );
}