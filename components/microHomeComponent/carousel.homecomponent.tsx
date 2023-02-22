import React, { useContext, useEffect, useRef, useState } from 'react'
import pages from "../../styles/home.pages.module.scss";
import authContext from '../../utilities/auth.context';
import SpotifyWebApi from 'spotify-web-api-node';
import { ellipse } from '../../utilities/helpers';
import axios from 'axios';
import { SkelentonCarousel } from '../loadingSkelenton/skelenton';

type trackApiType = {"string": string};
export default function Carousel() {
  const navigate:{current: HTMLElement|any} = useRef(null);
  const slide:{current: HTMLElement|any} = useRef(null);
  const {userProfile, auth} = useContext(authContext);
  const [getFeaturedPlaylist, setFeaturedPlaylist] = useState<any>([])
  const [trackApi, setTrackApi] = useState({} as trackApiType)
  
  useEffect(() => {
    // setInterval(DoSlide, (1000*20))
  }, [])
  
  useEffect(() => {
    if(userProfile.id)  {
      const spotifyApi = new SpotifyWebApi({
        accessToken: auth
      })
      
      spotifyApi.getFeaturedPlaylists({ limit : 5, offset: 0, country: userProfile.country })
      .then(function(data) {
        setFeaturedPlaylist(data.body.playlists.items); 
        console.log(getFeaturedPlaylist)
      }).catch(function(err) {
        console.log(err)
      })
    }
  }, [userProfile])
  
  useEffect(() => {
    if(!getFeaturedPlaylist.length) return;
      getFeaturedPlaylist.map((playlist:any, i: number) => {
        return setTrackApi((prev) => ({...prev, [i.toString()]: playlist.tracks.href}))
      })
  }, [getFeaturedPlaylist])
  
  function DoSlide() {
    const getSlides:HTMLDivElement[] = Array.from(slide?.current?.children);
    const controls = Array.from(navigate.current?.children);
    
    let pos = 0;
    let moveBy = 400;
    
    slide.current.style.cssText = `transform: translateY(-${moveBy}px); transition: .5s all cubic-bezier(0.445, 0.05, 0.55, 0.95)`;
    
    slide.current.addEventListener('transitionend', () => {
      // translate to top instantly
      slide.current.style.cssText = `transform: translateY(0px)`;
      //  remove active class
      getSlides[pos].removeAttribute("data-carousel_active");
      // take prev array to the back
      const prev = getSlides[pos];
      slide.current.appendChild(prev);
      const curpos:any = getSlides[pos+1].dataset.getslidepos;
      getSlides[pos+1].setAttribute("data-carousel_active", curpos);
      
      // active controls 
      const active = getSlides[pos+1].dataset.carousel_active;
      
      if(active) {
        controls.forEach((control:any) => {
           if(typeof control.dataset.carousel_active_id === "string") {
            control.removeAttribute("data-carousel_active_id")
           }
        })
        
        controls.filter((control:any, i) => {
         if(control.dataset.id === active){ 
          control?.setAttribute("data-carousel_active_id", control.dataset.id)
         }
        })
      }
    })
  }
  
  return (
    <div className={pages.carousel_container}>
      {
          getFeaturedPlaylist.length ? 
          <>
            <div ref={navigate} className={pages.carousel_navigate} onClick={DoSlide}>
              {
                getFeaturedPlaylist.map((playlist:any, i:number) => {
                  return (
                    <>
                    { i == 0 ? <div  data-carousel_active_id={i} data-id={i}></div> : <div data-id={i}></div> }
                    </>
                  )
                })
              }
            </div>
          
          <div className={pages.carousel}>
            {/* write up */}
            <div ref={slide} className={pages.carousel_trail}>
              {
                getFeaturedPlaylist.map((playlist:any, i:number) => (
                    <Slider bg={playlist.images[0].url} name={playlist.name} getslidepos={i.toString()} description={playlist.description} trackApi={trackApi} i={i.toString()}/>
                ))
              }
            </div>
          </div>
          </>
          :
          <SkelentonCarousel />
      }
    </div>
  )
}


function Slider({bg, name, getslidepos, description, trackApi, i}:{bg: string, name: string, getslidepos: string, description: string, trackApi: any, i: string}){
  const ref = useRef<any>(null);
  const {auth, userProfile} = useContext(authContext);
  
  useEffect(() => {
    const desc:HTMLElement = ref.current;
    desc.innerHTML = description
    const eleTxt = desc.firstChild?.textContent;
    desc.firstChild?.remove()
    desc.textContent = ellipse(`${eleTxt} ${desc?.textContent}`)
  }, [ref.current])
  
  function explore(e: any):void {
    const {explore}:any = e.target.dataset;
    console.log(trackApi[explore], auth);
    
    axios.get("https://api.spotify.com/v1/artists/"+userProfile.id, {headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + auth}}).then(console.log).catch(console.error)
  }
  return (
    <div className={pages.carousel_item} data-getslidepos={getslidepos} style={{backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg})`}}>
      <div className={pages.carousel_name}>{name}</div>
      <div className={pages.carousel_title} ref={ref}>
      {/* { ellipse(description)} */}
      </div>
      
      <button className={pages.carousel_button} onClick={explore} data-explore={i}>Explore now</button>
    </div>
  )
}