import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md flex flex-col gap-6 w-96 text-center">
        <h1 className="text-3xl font-bold">Actors App</h1>

        <Link
          href="/crear"
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Crear Actor
        </Link>

        <Link
          href="/movies/crear"
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Crear Movie
        </Link>

        <Link
          href="/prizes"
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Crear Prize
        </Link>

        <Link
          href="/actors"
          className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          View Actors
        </Link>

        <Link
          href="/movies"
          className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          View Movies
        </Link>
      </div>
    </div>
  );
}