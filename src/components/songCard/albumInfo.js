import React from 'react'
import './albumInfo.css'

export default function AlbumInfo({album}) {
    const artists = [];
    album?.artists?.forEach(element => {
        artists.push(element.name);
    });
  return (
    <div className='album-info'>
        <div className='albumName-container'>
            <div className='marquee'>
                <p>{album?.name + " - " + artists?.join(", ")}</p>
            </div>
        </div>
        <div className='album-release'>
            <p>Release Date: {album?.release_date}</p>
        </div>
    </div>
  )
}
