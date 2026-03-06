"use client";

import { useEffect } from "react";
import ActorList from "../ui/ActorList";
import { getActors } from "../services/actorsService";
import { useActorsStore } from "../store/useActorsStore";

export default function ActorsPage() {
  const { actors, setActors } = useActorsStore();

  useEffect(() => {
    const loadActors = async () => {
      try {
        const data = await getActors();
        setActors(data);
      } catch (error) {
        console.error("Error loading actors", error);
      }
    };

    loadActors();
  }, [setActors]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Actors List</h1>

      <ActorList />
    </div>
  );
}