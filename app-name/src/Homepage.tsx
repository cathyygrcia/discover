import { useEffect, useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import { ArtistProps } from './types';

export default function Homepage() {
  const [artists, setArtists] = useState<ArtistProps[]>([]);

  console.log(artists);

  useEffect(() => {
    async function getRandom() {
      try {
        const res = await fetch(
          'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&genreId=&apikey=aeMvG0zyzdpO1jAkGyCZeGxxQK4vIfpe',
        );
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const result = await res.json();
        setArtists(result._embedded.events);
      } catch (error) {
        console.error(error);
      }
    }
    getRandom();
  }, []);

  function formatDate(inputDate: string) {
    const parts = inputDate.split('-');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    return `${month}/${day}/${year}`;
  }

  console.log(formatDate('2025-25-01'));

  return (
    <>
      <Header text="Discover Me" section="" />
      <SearchBar />
      <div className="row">
        {artists.map((artist) => (
          <div key={artist.id} className="artist-info">
            <div className="image-wrapper">
              <img
                src={artist.images[0].url}
                alt={artist.name}
                className="img"
              />
            </div>
            <p className="artist-name">{artist.name}</p>
            <p className="artist-name">{artist._embedded.venues[0].name}</p>
            <p className="artist-name">
              {formatDate(artist.dates.start.localDate)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
