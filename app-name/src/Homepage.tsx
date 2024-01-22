import Header from './Header';
import SearchBar from './SearchBar';

export default function Homepage() {
  return (
    <>
      <Header text="Discover Me" section="" />
      <SearchBar />
      <div className="row">
        <div className="artist-info">
          <div className="image-wrapper">
            <img src="/images/hirie.jpg" alt="hirie" className="img" />
          </div>
        </div>
        <div className="artist-info">
          <div className="image-wrapper">
            <img src="/images/hirie.jpg" alt="hirie" className="img" />
          </div>
        </div>
        <div className="artist-info">
          <div className="image-wrapper">
            <img src="/images/hirie.jpg" alt="hirie" className="img" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="artist-info">
          <div className="image-wrapper">
            <img src="/images/hirie.jpg" alt="hirie" className="img" />
          </div>
        </div>
        <div className="artist-info">
          <div className="image-wrapper">
            <img src="/images/hirie.jpg" alt="hirie" className="img" />
          </div>
        </div>
        <div className="artist-info">
          <div className="image-wrapper">
            <img src="/images/hirie.jpg" alt="hirie" className="img" />
          </div>
        </div>
      </div>
    </>
  );
}
