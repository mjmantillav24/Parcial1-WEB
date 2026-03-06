"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getMovieById } from "@/src/modules/movies/services/moviesService";
import { MovieDetail } from "@/src/shared/validation/actorSchema";
import Link from "next/link";


export default function MovieDetailPage() {

  const params = useParams();
  const id = params.id as string;

  const [movie, setMovie] = useState<MovieDetail | null>(null);

  useEffect(() => {
    const loadMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };

    loadMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="p-6 space-y-6">

      <img src={movie.poster} className="w-60"/>

      <h1 className="text-3xl font-bold">{movie.title}</h1>

      <p><b>Country:</b> {movie.country}</p>
      <p><b>Duration:</b> {movie.duration} min</p>
      <p><b>Popularity:</b> {movie.popularity}</p>

      <p>
        <b>Release Date:</b>{" "}
        {new Date(movie.releaseDate).toLocaleDateString()}
      </p>

      <div>
        <h2 className="text-xl font-bold">Director</h2>
        <p>{movie.director.name}</p>
        <p>{movie.director.nationality}</p>
      </div>

      <div>
        <h2 className="text-xl font-bold">Genre</h2>
        <p>{movie.genre.type}</p>
      </div>

      <div>
        <h2 className="text-xl font-bold">Actors</h2>

        {movie.actors.map((actor) => (
          <div key={actor.id}>
            <p>{actor.name}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold">Platforms</h2>

        {movie.platforms.map((platform) => (
          <div key={platform.id}>
            <p>{platform.name}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold">Reviews</h2>

        {movie.reviews.map((review) => (
          <div key={review.id} className="border p-3 mb-2">

            <p>{review.text}</p>

            <p>
              <b>Score:</b> {review.score}
            </p>

            <p>
              <b>By:</b> {review.creator}
            </p>

          </div>
        ))}
        
      </div>

      <div>
        <h2 className="text-xl font-bold">Trailer</h2>

        <p>{movie.youtubeTrailer.name}</p>

        <a
          href={movie.youtubeTrailer.url}
          target="_blank"
          className="text-blue-500"
        >
          Watch trailer
        </a>

      </div>

    </div>
  );
}