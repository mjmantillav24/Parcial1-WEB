"use client";

import { useActorsStore } from "../store/useActorsStore";

export default function ActorList() {
  const actors = useActorsStore((state) => state.actors);

  if (actors.length === 0) {
    return <p className="text-gray-500">No actors available.</p>;
  }

  return (
    <div className="space-y-6">
      {actors.map((actor) => (
        <div
          key={actor.id}
          className="border border-gray-300 p-4 rounded-md shadow-sm"
        >
          <h2 className="text-xl font-bold">{actor.name}</h2>

          <img
            src={actor.photo}
            alt={actor.name}
            className="w-40 mt-2 rounded-md object-cover"
          />

          <p><strong>Nationality:</strong> {actor.nationality}</p>

          <p>
            <strong>Birth Date:</strong>{" "}
            {actor.birthDate
  ? new Date(actor.birthDate).toLocaleDateString()
  : "No date"}
          </p>

          <p className="mt-2">{actor.biography}</p>

          <p className="font-semibold mt-2">Movies:</p>
          <ul className="list-disc list-inside">
            {actor.movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}