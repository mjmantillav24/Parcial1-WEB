"use client";

import { deleteActor } from "../services/actorsService";
import { useActorsStore } from "../store/useActorsStore";
import { useRouter } from "next/navigation";

export default function ActorList() {
  const router = useRouter();
  const actors = useActorsStore((state) => state.actors);
  const removeActor = useActorsStore((state) => state.deleteActor);

  const handleDelete = async (id: string) => {
    try {
      await deleteActor(id); 
      removeActor(id);
    } catch (error) {
      console.error("Error deleting actor:", error);
    }
  };

  

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

          <div>
  <strong>Movies:</strong>
 <ul>
  {actor.movies?.map((movie) => {
    if (typeof movie === "string") {
      return <li key={movie}>{movie}</li>;
    }

    return <li key={movie.id}>{movie.title}</li>;
  })}
</ul>
</div>

        <button
        onClick={() => router.push(`/actors/${actor.id}`)}
        className="mt-3 bg-yellow-500 text-white px-3 py-1 rounded"
      >
        Edit
      </button>
      <button
        onClick={() => handleDelete(actor.id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
        </div>
        
      ))}
      
    </div>
  );
}
  