import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import trendingImage from "../../public/artist.jpg"
import home from "../../styles/microhome.pages.module.scss";

export default function Trending() {
  return (
    <div className={home.trending_container}>
      <div className={home.trendingNow}>
        <h2>Trending right now</h2>
        
        <div className={home.trending_see_all}>
          <Link href={"#"}>See all</Link>
        </div>
      </div>
      
      <div className={home.trending_list}>
        <TrendingItem nums={"01"} />
        <TrendingItem nums={"02"} />
        <TrendingItem nums={"03"} />
        <TrendingItem nums={"04"} />
        <TrendingItem nums={"05"} />
      </div>
    
    </div>
  )
}

function TrendingItem({nums}:{nums: string}){
  return (
   <>
    <div className={home.trending}>
          {/* trending image,  */}
          <div className={home.trending_data}>
            <div className={home.trending_numbering}>{nums}</div>
             {/* trending image */}
             <Image src={trendingImage}
             height={65}
             width={60}
             alt="use trending Image"/>
             
             <div className={home.trending_info}>
                <h3>I'm Good (Blue)</h3>
                <div className={home.trending_records}>
                  <div className="">
                    {/* svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="darkgray" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/></svg>
                    <span>David Guetta {"&"} Bebe Rexha</span>
                  </div>
                </div>
             </div>
          </div>
          
          <div className={home.trending_music_info}>
            {/* duration */}
            <div className={home.trending_music_duration}>03:29</div>
            <div className={home.trending_music_play_count}>8 078 651</div>
          </div>
          
          {/* trending info icon */}
          <div className={home.trending_info_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><circle cx="64" cy="128" r="12" fill="black"/><circle cx="192" cy="128" r="12" fill="black"/><circle cx="128" cy="128" r="12" fill="black"/></svg>
          </div>
        </div>
   </>
  )
}
