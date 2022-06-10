import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="App">
      <div className='top'>
        <img className='logo' src='https://instagram-image-from-wiki.png' alt='insta' />
        <h1>Reels</h1>
      </div>

      <div className='videos'>
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
