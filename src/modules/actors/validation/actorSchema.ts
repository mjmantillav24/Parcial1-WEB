import { z } from "zod";

export const actorSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),

  photo: z
    .string()
    .url({ message: "Photo must be a valid URL" }),

  nationality: z
    .string()
    .min(2, { message: "Nationality is required" }),

  birthDate: z
    .string()
    .min(1, { message: "Birth date is required" }),

  biography: z
    .string()
    .min(10, { message: "Biography must be at least 10 characters" }),
});

export type ActorFormData = z.infer<typeof actorSchema>;

export interface Movie {
  id: string;
  title: string;
}

export interface Actor extends ActorFormData {
  id: string;
  movies: Movie[];
}