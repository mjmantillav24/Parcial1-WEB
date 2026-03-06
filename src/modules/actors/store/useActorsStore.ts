import { create } from "zustand";

export interface Movie {
  id: string;
  title: string;
  poster: string;
  duration: number;
  country: string;
  releaseDate: string;
  popularity: number;
}

export interface Actor {
  id: string;
  name: string;
  photo: string;
  nationality: string;
  birthDate: string;
  biography: string;
  movies: Movie[];
}

interface ActorsState {
  actors: Actor[];
  setActors: (actors: Actor[]) => void;
  addActor: (actor: Actor) => void;
}

export const useActorsStore = create<ActorsState>((set) => ({
  actors: [],

  setActors: (actors) => set({ actors }),

  addActor: (actor) =>
    set((state) => ({
      actors: [...state.actors, actor],
    })),
}));