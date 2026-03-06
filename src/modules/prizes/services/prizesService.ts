import { Prize, PrizeFormData } from "@/src/shared/validation/actorSchema";


const API_URL = "http://localhost:3000/api/v1/prizes";

export const createPrize = async (data: PrizeFormData): Promise<Prize> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create prize");
  }

  return res.json();
};

export const getPrizes = async (): Promise<Prize[]> => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch prizes");
  }

  return res.json();
};