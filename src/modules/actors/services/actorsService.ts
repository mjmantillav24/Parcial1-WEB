import { Actor, ActorFormData } from "../validation/actorSchema";

const API_URL = "http://localhost:3000/api/v1/actors";

export const getActors = async (): Promise<Actor[]> => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch actors");
  }

  return res.json();
};

export const createActor = async (data: ActorFormData): Promise<Actor> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create actor");
  }

  return res.json();
};

export const updateActor = async (
  id: string,
  data: ActorFormData
): Promise<Actor> => {
  const res = await fetch(`http://localhost:3000/api/v1/actors/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to update actor");
  }

  return res.json();
};

export const deleteActor = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete actor");
  }
};