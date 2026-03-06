import { Prize } from "@/src/shared/validation/actorSchema";
import { create } from "zustand";


interface PrizesStore {
  prizes: Prize[];

  setPrizes: (prizes: Prize[]) => void;

  addPrize: (prize: Prize) => void;
}

export const usePrizesStore = create<PrizesStore>((set) => ({
  prizes: [],

  setPrizes: (prizes) =>
    set({
      prizes,
    }),

  addPrize: (prize) =>
    set((state) => ({
      prizes: [...state.prizes, prize],
    })),
}));