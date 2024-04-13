import React from 'react';
import Image from 'next/image';

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const apiKey = process.env.API_KEY; // Ensure the API key is properly configured in your environment variables

  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
  let movie = null;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      // If the response is not OK, throw an error to catch it below
      throw new Error(`HTTP status ${res.status}`);
    }
    movie = await res.json();
  } catch (error) {
    // Handle errors, such as network issues, invalid JSON, or HTTP errors
    console.error('Failed to fetch movie:', error);
    return <div>Error loading the movie details.</div>;
  }

  // Assuming the movie data has been successfully fetched and parsed
  return (
    // <div className='max-w-6xl mx-auto py-5 flex items-center gap-4 flex-wrap'>
    //   <div>
    //     {movie && movie.backdrop_path || movie.poster_path ? (
    //       <Image
    //         src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
    //         width={500}
    //         height={300}
    //         className='rounded-lg'
    //         alt={`Backdrop for ${movie.title}`}
    //       />
    //     ) : (
    //       <p>No image available.</p>
    //     )}
    //   </div>
    //   <div className='p-4 space-y-4 shadow-lg rounded-lg'>
    //     <h2 className='truncate font-semibold text-lg'>{movie.title || movie.name || movie.orignal_title}</h2>
    //     <p className='text-md'>{movie.overview}</p>
    //     <p className='text-md'>Date Released : {movie.release_date || movie.first_air_date}</p>
    //     <p>Rating : {movie.vote_count}</p>
    //   </div>
    // </div>
    <div className='max-w-7xl mx-auto px-4 py-8'>
    <div className='flex flex-col md:flex-row items-center gap-8'>
      <div className='flex-1'>
        {movie && (movie.backdrop_path || movie.poster_path) ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            width={500}
            height={300}
            className='rounded-lg'
            alt={`Backdrop for ${movie.title}`}
            layout='responsive'
          />
        ) : (
          <p className='text-center'>No image available.</p>
        )}
      </div>
      <div className='flex-1  p-6 space-y-4 rounded-lg'>
        <h2 className='text-2xl font-semibold truncate'>{movie.title || movie.name || movie.original_title}</h2>
        <p>{movie.overview}</p>
        <p>Date Released: {movie.release_date || movie.first_air_date}</p>
        <p>Rating: {movie.vote_average || 'N/A'} ({movie.vote_count || 0} votes)</p>
      </div>
    </div>
  </div>
  );
}
