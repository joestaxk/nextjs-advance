import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import home from "../../styles/microhome.pages.module.scss";
import authContext from '../../utilities/auth.context';
import axios from 'axios';
import { SkelentonTrending } from '../loadingSkelenton/skelenton';


type arstistInfoType = {
  img?: string;
  artistName?: string;
}
export default function Trending() {
  const [triggerMoreInfo, setTrigger] = useState<boolean>(false)
  const {auth, userProfile} = useContext(authContext);
  const [track, setTrack] = useState<any[]>([]);
  
  function ShowMoreInfo(ev:any) {
    const target = ev.target;
    setTrigger(!triggerMoreInfo)
  }
  
  useEffect(() => {
    window.addEventListener('click', function(e:any) {
      if(e.target.id !== "more_click" && triggerMoreInfo) {
        setTrigger(!triggerMoreInfo)
      }
    })
  }, [triggerMoreInfo, auth])
  
  useEffect(() => {
    const uri = `https://api.spotify.com/v1/playlists/37i9dQZEVXbNG2KDcFcKOF/tracks?market=${userProfile?.country}&limit=5`;
    
    axios.get(uri, {headers: {'Content-Type': 'application/json', Authorization: "Bearer " + auth}}).then(({data}) => {
      const {items} = data;
      setTrack(items)
    }).catch(err => {
      console.log(err)
    })
  }, [auth, userProfile])
  
  return (
    <div className={home.trending_container}>
      {/* <More_info showMe={triggerMoreInfo}/> */}
      {
        track.length ? 
          <>
            <div className={home.trendingNow}>
              <h2>Trending right now</h2>
              
              <div className={home.trending_see_all}>
                <Link href={"#"}>See all</Link>
              </div>
            </div>
            
            <div className={home.trending_list}>
              { track.map(({track}, i) => (
                    <TrendingItem nums={(i+1 < 10 ? "0" + (i+1) : i).toString()} key={i.toString()} track={track} ShowMoreInfo = {ShowMoreInfo}/>
                ))
              }
            </div>
          </>
        :
        <>
          <SkelentonTrending />
          <SkelentonTrending />
          <SkelentonTrending />
          <SkelentonTrending />
          <SkelentonTrending />
        </>
      }
    </div>
  )
}

type albumImgType ={
  height: number,
  url: string,
  width: number
}

type trackType = {
  duration_ms: string,
  artist_name: string,
  artist_id: string,
  name: string,
  album_id: string,
  album_images: albumImgType,
}

function TrendingItem({nums, track, ShowMoreInfo}:{nums: string, track:any, ShowMoreInfo: (arg0: any) => void}){
  const trackInfo:trackType = {
    duration_ms: (track.duration_ms / 60000).toString().substring(0, 4).replace('.', ':'),
    artist_name : track.artists[0].name,
    artist_id : track.artists[0].id,
    name: track.name,
    album_id: track.album.id,
    album_images: track.album.images[track.album.images.length-1]
  }
  
  return (
   <>
    <div className={home.trending}>
          {/* trending image,  */}
          <div className={home.trending_data}>
            <div className={home.trending_numbering}>{nums}</div>
             {/* trending image */}
             <Image src={trackInfo.album_images.url}
             height={trackInfo.album_images.height}
             width={trackInfo.album_images.width}
             alt="use trending Image"/>
             
             <div className={home.trending_info}>
                <h3>{trackInfo.name}</h3>
                <div className={home.trending_records}>
                  <div className={home.trending_artist}>
                    {/* svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="darkgray" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/></svg>
                    <span> <Link href={"/artists/" + trackInfo.artist_id}>{trackInfo.artist_name}</Link></span>
                  </div>
                </div>
             </div>
          </div>
          
          <div className={home.trending_music_info}>
            {/* duration */}
            <div className={home.trending_music_duration}>{trackInfo.duration_ms}</div>
            {/* <div className={home.trending_music_play_count}>8 078 651</div> */}
          </div>
          
          {/* trending info icon */}
          <div className={home.trending_info_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"/></svg>
            <svg id="more_click"  onClick={ShowMoreInfo} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><circle cx="64" cy="128" r="12" fill="black"/><circle cx="192" cy="128" r="12" fill="black"/><circle cx="128" cy="128" r="12" fill="black"/></svg>
          </div>
        </div>
        
   </>
  )
}


function More_info({showMe}: {showMe: boolean}) {
  return (
    <>
      <div id='more_info' className={home.more_info_container} style={{bottom: `${!showMe ? "-40rem" : "0rem"}`}}>
          
      </div>
    </>
  )
}