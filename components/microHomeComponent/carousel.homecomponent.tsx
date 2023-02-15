import React, { useEffect, useRef } from 'react'
import pages from "../../styles/home.pages.module.scss";



export default function Carousel() {
  const navigate:{current: HTMLElement|any} = useRef(null);
  const slide:{current: HTMLElement|any} = useRef(null);
  useEffect(() => {
    // setInterval(DoSlide, (1000*20))
  }, [])
  
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
    <div className={pages.carousel_container}  onClick={DoSlide}>
        <div ref={navigate} className={pages.carousel_navigate}>
          <div  data-carousel_active_id='0' data-id="0"></div>
          <div className="" data-id='1'></div>
          <div className="" data-id="2"></div>
        </div>
      
      <div className={pages.carousel}>
         {/* write up */}
         <div ref={slide} className={pages.carousel_trail}>
          <Slider bg="carouse_1.jpg" getslidepos='0'/>
          <Slider bg="carouse_2.jpg" getslidepos="1"/>
          <Slider bg="carouse_3.jpg" getslidepos="2"/>
         </div>
      </div>
    </div>
  )
}


function Slider({bg, getslidepos}:{bg: string, getslidepos: string}){
  return (
    <div className={pages.carousel_item} data-getslidepos={getslidepos} style={{backgroundImage: `url(/${bg})`}}>
      <div className={pages.carousel_name}>Mike Powell Midnights</div>
      <div className={pages.carousel_title}>
        Listen to trending songs all the time
      </div>
      <div className={pages.carousel_more}>
      with Mike Powell. You can get premium music for free anywhere at any time
      </div>
      
      <button className={pages.carousel_button}>Explore now</button>
    </div>
  )
}