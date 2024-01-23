import { useEffect, useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import { ArtistProps } from './types';

export default function Homepage() {
  const [artists, setArtists] = useState<ArtistProps[]>([]);
  const [images, setImages] = useState<ArtistProps[]>([]);

  console.log(artists);
  console.log(images);

  useEffect(() => {
    async function getRandom() {
      try {
        const res = await fetch(
          'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&genreId=&apikey=aeMvG0zyzdpO1jAkGyCZeGxxQK4vIfpe',
        );
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const result = await res.json();
        setArtists(result._embedded.events);
        setImages(result._embedded.events.images[0].url);
      } catch (error) {
        console.error(error);
      }
    }
    getRandom();
  }, []);

  return (
    <>
      <Header text="Discover Me" section="" />
      <SearchBar />
      <div className="row">
        {artists.map((artist) => (
          <div key={artist.id} className="artist-info">
            <div className="image-wrapper">
              {images.map((images) => (
                <img src={images.images} alt={artist.name} className="img" />
              ))}
            </div>
            <p className="artist-name">{artist.name}</p>
            <p className="artist_name">{artist.venue}</p>
          </div>
        ))}
      </div>
    </>
  );
}
