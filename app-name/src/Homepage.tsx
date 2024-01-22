import { useEffect, useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';

export default function Homepage() {
  const [artist, setArtists] = useState();

  console.log(artist);
  useEffect(() => {
    async function getRandom() {
      try {
        const res = await fetch(
          'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&genreId=&apikey=aeMvG0zyzdpO1jAkGyCZeGxxQK4vIfpe',
        );
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const result = await res.json();
        setArtists(result);
      } catch (error) {
        console.log(error);
      }
    }
    getRandom();
  }, []);

  return (
    <>
      <Header text="Discover Me" section="" />
      <SearchBar />
      <div className="row">
        <div className="artist-info">
          <div className="image-wrapper">
            <img src="/images/hirie.jpg" alt="hirie" className="img" />
          </div>
          <p className="artist-name">Hirie</p>
          <p className="artist-name">The Roxy</p>
        </div>
        <div className="artist-info">
          <div className="image-wrapper">
            <img src="/images/hirie.jpg" alt="hirie" className="img" />
          </div>
          <p className="artist-name">Hirie</p>
        </div>
        <div className="artist-info">
          <div className="image-wrapper">
            <img src="/images/hirie.jpg" alt="hirie" className="img" />
          </div>
          <p className="artist-name">Hirie</p>
        </div>
      </div>
      <div className="row">
        <div className="artist-info">
          <div className="image-wrapper">
            <img src="/images/hirie.jpg" alt="hirie" className="img" />
          </div>
          <p className="artist-name">Hirie</p>
        </div>
        <div className="artist-info">
          <div className="image-wrapper">
            <img src="/images/hirie.jpg" alt="hirie" className="img" />
          </div>
          <p className="artist-name">Hirie</p>
        </div>
        <div className="artist-info">
          <div className="image-wrapper">
            <img src="/images/hirie.jpg" alt="hirie" className="img" />
          </div>
          <p className="artist-name">Hirie</p>
        </div>
      </div>
    </>
  );
}
