import { useEffect, useState } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase'

function App() {
  const [reels, setReels] = useState([])

  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])
  
  return (
    <div className="App">
      <div className='top'>
        <img className='logo' src='https://instagram-image-from-wiki.png' alt='insta' />
        <h1>Reels</h1>
      </div>
      {/* also had to go for that firebase firestore and create db but i was too lazy to do it and it's not hte first time i do this lol */}
      <div className='videos'>
        {reels.map(({channel, avatar, song, url, likes, shares}) => (
          <VideoCard 
            channel={channel}
            avatar={avatar}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
