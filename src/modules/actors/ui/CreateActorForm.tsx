"use client";

import { useState } from "react";
import { useActorsStore } from "../store/useActorsStore";

interface Errors {
  name?: string;
  photo?: string;
  nationality?: string;
  birthDate?: string;
  biography?: string;
}

export default function CreateActorForm() {
  const addActor = useActorsStore((state) => state.addActor);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [nationality, setNationality] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [biography, setBiography] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const newErrors: Errors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!photo.trim()) newErrors.photo = "Photo URL is required";
    if (!nationality.trim()) newErrors.nationality = "Nationality is required";
    if (!birthDate.trim()) newErrors.birthDate = "Birth date is required";
    if (!biography.trim()) newErrors.biography = "Biography is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    addActor({
      id: crypto.randomUUID(),
      name,
      photo,
      nationality,
      birthDate,
      biography,
      movies: [],
    });

    setName("");
    setPhoto("");
    setNationality("");
    setBirthDate("");
    setBiography("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-4 p-6 border rounded-lg bg-gray-50 shadow-sm"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`p-2 border rounded ${
          errors.name ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

      <input
        type="text"
        placeholder="Photo URL"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        className={`p-2 border rounded ${
          errors.photo ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.photo && <span className="text-red-500 text-sm">{errors.photo}</span>}

      <input
        type="text"
        placeholder="Nationality"
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
        className={`p-2 border rounded ${
          errors.nationality ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.nationality && (
        <span className="text-red-500 text-sm">{errors.nationality}</span>
      )}

      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className={`p-2 border rounded ${
          errors.birthDate ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.birthDate && (
        <span className="text-red-500 text-sm">{errors.birthDate}</span>
      )}

      <textarea
        placeholder="Biography"
        value={biography}
        onChange={(e) => setBiography(e.target.value)}
        rows={4}
        className={`p-2 border rounded ${
          errors.biography ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.biography && (
        <span className="text-red-500 text-sm">{errors.biography}</span>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700 transition"
      >
        Create Actor
      </button>
    </form>
  );
}