import { create } from "zustand";
import { Actor } from "../validation/actorSchema";

interface ActorsState {
  actors: Actor[];
  setActors: (actors: Actor[]) => void;
  addActor: (actor: Actor) => void;
  updateActor: (actor: Actor) => void;
  deleteActor: (id: string) => void;
}

export const useActorsStore = create<ActorsState>((set) => ({
  actors: [],

  setActors: (actors) => set({ actors }),

  addActor: (actor) =>
  set((state) => ({
    actors: [
      ...state.actors,
      {
        ...actor,
        movies: actor.movies ?? [],
      },
    ],
  })),

  updateActor: (updatedActor) =>
  set((state) => ({
    actors: state.actors.map((actor) =>
      actor.id === updatedActor.id
        ? {
            ...updatedActor,
            movies: actor.movies ?? [],
          }
        : actor
    ),
  })),

  deleteActor: (id: string) =>
    set((state) => ({
      actors: state.actors.filter((a) => a.id !== id),
    })),
}));