import React, { useEffect, useState } from 'react'
import './player.css'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify';
import SongCard from '../../components/songCard';
import Queue from '../../components/queue';
import AudioPlayer from '../../components/audioPlayer';
export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if(location.state){
      apiClient.get("playlists/" + location.state?.id +"/tracks")
      .then(res => {
        setTracks(res.data.items);
        setCurrentTrack(res.data.items[0].track);
      });
    }
  }, [location.state]);
  // console.log(tracks[2]);
  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex,tracks]);

  console.log(currentTrack);
  return (
    <div className='screen-container flex'>
      <div className='left-player-body'>
        <AudioPlayer currentTrack={currentTrack} total={tracks} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
      </div>
      <div className='right-player-body'>
        <SongCard album={currentTrack?.album}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>
  )
}
