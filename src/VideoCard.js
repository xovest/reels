import React, { useRef, useState } from 'react'
import './VideoCard.css'

function VideoCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause()
      setIsVideoPlaying(false)
    } else {
      videoRef.current.play()
      setIsVideoPlaying(false)
    }
  }

  return (
    <div className='videoCard'>
      
      <video ref={videoRef} onClick={onVideoPress} className='videoPlayer' src='http://just-a-random-url.mp4' alt='lol reel' loop />
    </div>
  )
}

export default VideoCard