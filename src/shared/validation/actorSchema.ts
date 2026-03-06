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

  movies: z.array(z.string()).optional(), 
});

export type ActorFormData = z.infer<typeof actorSchema>;
export interface Actor extends Omit<ActorFormData, "movies"> {
  id: string;
  movies?: Movie[];
}



export const movieSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required"),

  poster: z
    .string()
    .url({ message: "Photo must be a valid URL" }),

  duration: z
    .number()
    .min(1, "Duration must be a positive number"),

  country: z
    .string()
    .min(1, "Country is required"),

  releaseDate: z
    .string()
    .min(1, "Release date is required"),
    
  popularity: z
    .number()
    .min(0, "Popularity must be a non-negative number"),
});

export type MovieFormData = z.infer<typeof movieSchema>;

export type Movie = MovieFormData & {
  id: string;
};


export const prizeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  year: z.number().min(1900),
  status: z.enum(["won", "nominated"]),
});

export type PrizeFormData = z.infer<typeof prizeSchema>;

export interface Prize {
  id: string;
  name: string;
  category: string;
  year: number;
  status: string;
}



export interface Director {
  id: string;
  name: string;
  photo: string;
  nationality: string;
  birthDate: string;
  biography: string;
}

export interface Genre {
  id: string;
  type: string;
}

export interface Platform {
  id: string;
  name: string;
  url: string;
}

export interface Review {
  id: string;
  text: string;
  score: number;
  creator: string;
}



export interface Trailer {
  id: string;
  name: string;
  url: string;
  duration: number;
  channel: string;
}

export interface MovieDetail {
  id: string;
  title: string;
  poster: string;
  duration: number;
  country: string;
  releaseDate: string;
  popularity: number;

  director: Director;
  actors: Actor[];
  genre: Genre;
  platforms: Platform[];
  reviews: Review[];
  youtubeTrailer: Trailer;
}