import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArtistImage from "../../public/artist.jpg"
import home from "../../styles/microhome.pages.module.scss";

export default function TopArtist() {
  return (
    <div className={home.topArtist_container}>
      <div className={home.topArtist}>
        <h2>Top Artist</h2>
        
        <div className={home.topArtist_see_all}>
          <Link href={"#"}>See all</Link>
        </div>
      </div>
      
      <div className={home.artist_list}>
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
      </div>
    
    </div>
  )
}


function ArtistItem(){
  return (
   <>
              <div className={home.artist}>
          {/* Artist image,  */}
          <div className={home.artist_data}>
             {/* Artist image */}
             <Image src={ArtistImage}
             height={65}
             width={60}
             alt="use Artist Image"/>
             
             <div className={home.artist_info}>
                <h3>Muse</h3>
                <div className={home.artist_records}>
                  <div className="">
                    {/* svg */}
                    <span>142291</span> Followers
                  </div>
                  <div className="">
                    {/* stream svg */}
                    <span>119M</span> Plays
                  </div>
                </div>
             </div>
          </div>
          
          {/* Artist info icon */}
          <div className={home.artist_info_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><circle cx="64" cy="128" r="12" fill="black"/><circle cx="192" cy="128" r="12" fill="black"/><circle cx="128" cy="128" r="12" fill="black"/></svg>
          </div>
        </div>
   </>
  )
}