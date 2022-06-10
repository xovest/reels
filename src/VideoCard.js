import React, { useRef, useState } from 'react'
import './VideoCard.css'
import VideoHeader from './VideoHeader'

function VideoCard({ url, likes, shares, channel, avatar, song }) {
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
      <VideoHeader />
      <video ref={videoRef} onClick={onVideoPress} className='videoPlayer' src='http://just-a-random-url.mp4' alt='lol reel' loop />
      {/* same stuff for footer */}
    </div>
  )
}

export default VideoCard