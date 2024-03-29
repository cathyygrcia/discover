import './App.css';
import { ArtistInfo } from './ArtistInfo';
import Homepage from './Homepage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Artist" element={<ArtistInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
