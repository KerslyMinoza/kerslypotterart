import './App.css';
import { useEffect, useRef, useState } from 'react';
import video from './Assets/Images/kerslypottervideo.mp4';

function App() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      }
    };

    playVideo();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="content-left">
          <div className="social-icons">
            <a href="https://www.instagram.com/kerslypotterart/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://open.spotify.com/artist/5xSOIue8FHKMFSw4E05zMM?si=0yEHNrMGSG-UJ8-Sfysu7A" className="social-icon" aria-label="Spotify" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-spotify"></i>
            </a>
          </div>
          <h1 className="main-heading">
            Art.<br />
            Process.<br />
            Expression.
          </h1>
          <p className="subtext">Explore my world of art and music coming soon.</p>
        </div>

        <div className="content-right">
          <video
            ref={videoRef}
            className="artwork-video"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            className="unmute-button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            <i className={isMuted ? "fas fa-volume-mute" : "fas fa-volume-up"}></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
