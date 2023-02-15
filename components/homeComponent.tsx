import TopHeadComponent from "./topHeadComponent";
import style from "../styles/style.module.scss";
import pages from "../styles/home.pages.module.scss";
import Carousel from "./microHomeComponent/carousel.homecomponent";
import Trending from "./microHomeComponent/trending.homecomponent";
import TopArtist from "./microHomeComponent/topArtist.homecomponent";
import RecentFavourites from "./microHomeComponent/recentFavourites.homecomponent";
import { useEffect, useRef } from "react";
import resize from "../utilities/mediaQuery";

export default function HomeComponent() {
    type containerType = {current: any}
    let grab:containerType = useRef<HTMLElement>(null);
    let container:containerType = useRef<HTMLElement>(null);
    let componentGrid:containerType = useRef<HTMLElement>(null);
    
    
    useEffect(() => {
    function grabber(e:DragEvent) {
      grab.current.style.cssText =  `transition: .5s; transform: translate(${e.clientX},${e.clientY})`;
      container.current.style.cssText = `transition: .5s; transform: translateX(${e.clientX || e.screenX}px)`;
    }
    if(window.innerWidth  > 750){
      // Grab Event 
      grab.current.addEventListener("dragstart", grabber)
      // grab.current.addEventListener("touch", grabber)
      grab.current.addEventListener("drag", grabber)
      
      // Grab end event
      grab.current.addEventListener("dragend", function(e:DragEvent) {
        if((e.clientX || e.screenX) > 300) {        
          const parent:HTMLElement = grab.current.parentElement;
          //  for tabletx
          let tabletx = 1120
          if(window.innerWidth <= tabletx) {
            parent.style.cssText = "width: calc(100% - (150px + 300px)); transform: translateX(calc(150px + 350px));"
          }else {
            parent.style.cssText = "width: calc(100% - (150px + 400px)); transform: translateX(calc(150px + 450px));"
          }
          container.current.style.cssText = `margin-left: 0px; transition: .5s ease-out; `;
          // componentGrid.current.style.cssText = "grid-template-columns: 1fr 0px;"
          
          grab.current.style.cssText = "left: 0px;"        
          grab.current.removeEventListener("dragstart", grabber)
          grab.current.removeEventListener("drag", grabber)
       }else {
          grab.current.addEventListener("dragstart", grabber)
          grab.current.addEventListener("drag", grabber)
          
          container.current.style.cssText = `transform: translateX(0px); transition: .5s ease-in; `;
        // componentGrid.current.style.cssText = `grid-template-columns: auto "500px";`
       }
      })
      
      container.current.addEventListener('click', function(){
        const parent:HTMLElement = grab.current.parentElement;
        parent.style.cssText = "width: 100%; transform: translateX(0px); transition: .3s";
        container.current.style.cssText = `margin-left: "120px"; transform: translateX(0px); transition: .5s linear; `;
        // componentGrid.current.style.cssText = `grid-template-columns: auto "500px";`
        grab.current.style.cssText = "left: 7rem;"
      })
    }
      
      return () => {
        grab.current?.removeEventListener("dragstart", grabber)
        grab.current?.removeEventListener("drag", grabber)
      }
    }, [])
    
    return  (
      <div className={style.mainBody}>
       <div ref={grab} className={style.grab} draggable="true">
       </div>
       <div ref={container} className={style.container}>
          <div className={pages.pagePanel}>
            <TopHeadComponent title="Home"/>
          </div>
          
          {/* Home Component 2 column grid */}
          <div className={pages.homeComponentGrid} ref={componentGrid}>
           <div className={pages.column_one}>
              <Carousel />
              <Trending />
            </div>
            
            <div className={pages.column_two}>
              <TopArtist/>
              <RecentFavourites />
            </div>            
          </div>
          
       </div>
      </div>
    )
  }