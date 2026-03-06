"use client";

import { useEffect } from "react";
import { useActorsStore } from "../store/useActorsStore";
import ActorList from "../ui/ActorList";


export default function ActorsPage() {
  const setActors = useActorsStore((state) => state.setActors);

  useEffect(() => {
    const fetchActors = async () => {
      const response = await fetch("http://localhost:3000/api/v1/actors");;
      const data = await response.json();
      setActors(data);
    };

    fetchActors();
  }, [setActors]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Actors List
      </h1>

      <ActorList />
    </div>
  );
}