import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import pages from "../styles/home.pages.module.scss";

interface topHeadComponentProps {
  title: string
}
export default function TopHeadComponent({title}: topHeadComponentProps) {
  const links:{current: any} = useRef<HTMLElement>(null)
  const [isOpen, setNavigateIcon] = useState(false)
  
  const handleNavigateClick = (ev:any):void => {
    setNavigateIcon(!isOpen)
    
    if(!isOpen) {
      // if open true, show links;
      const linkchildren:HTMLElement[] = Array.from(links.current.children);
      links.current.style.cssText = "opacity: 1; transition: .5s opacity linear";
      linkchildren.forEach((link, i) => {
        link.style.cssText = `margin-left: 0px; opacity: 1; transition-duration: ${i + 1}; transition-timing-function: cubic-bezier(2.5, 0.5, 0.1)`
      })
    }else {
      // if open true, show links;
      const linkchildren:HTMLElement[] = Array.from(links.current.children);
      linkchildren.forEach((link, i) => {
        link.style.cssText = `margin-left: ${(i+1) * 2}rem; opacity: 1; transition-duration: ${i + 1}; transition-timing-function: cubic-bezier(2.5, 0.5, 0.1)`
      })
      links.current.style.cssText = "opacity: 0; transition: .5s opacity linear";
    }

  }
  
  useEffect(() => {
    window.addEventListener('click', function(e:any) {
      if(!e.target.closest('#mobile_icon_drop') && isOpen) {
        setNavigateIcon(!isOpen)
        // if open true, show links;
        const linkchildren:HTMLElement[] = Array.from(links.current.children);
        linkchildren.forEach((link, i) => {
          link.style.cssText = `margin-left: ${(i+1) * 2}rem; opacity: 1; transition-duration: ${i + 1}; transition-timing-function: cubic-bezier(2.5, 0.5, 0.1)`
        })
        links.current.style.cssText = "opacity: 0; transition: .5s opacity linear";
      }
    })
  }, [isOpen])
  
  
  return (
    <div className={pages.header}>
      {/* <h2>{title}</h2> */}
      <div className={pages.mobile_icon_sidebar} id="mobile_icon_drop"> 
        <div className={pages.current_icon}>
          <div className={pages.svg_icon} data-current_icon="home">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M6 21q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9q.212-.425.587-.7l6-4.5q.275-.2.575-.3q.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7q.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21h-4v-7h-4v7Z"/></svg>
          </div>
          
          <div className={pages.navigate} onClick={handleNavigateClick}>
            <svg xmlns="http://www.w3.org/2000/svg" data-caret={isOpen} width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M128 188a12.2 12.2 0 0 1-8.5-3.5l-80-80a12 12 0 0 1 17-17L128 159l71.5-71.5a12 12 0 0 1 17 17l-80 80a12.2 12.2 0 0 1-8.5 3.5Z"/></svg>

            <svg  xmlns="http://www.w3.org/2000/svg" data-caret={!isOpen} width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M208 172a12.2 12.2 0 0 1-8.5-3.5L128 97l-71.5 71.5a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0l80 80a12 12 0 0 1 0 17a12.2 12.2 0 0 1-8.5 3.5Z"/></svg>
          </div>
        </div>
        
        
        <div className={pages.links} ref={links}>
          {/* MUSIC */}
          <Link href="#MUSIC" className={pages.svg_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M216 32v140a36 36 0 1 1-36-36a35.3 35.3 0 0 1 20 6.1V42.2l-112 28V204a36 36 0 1 1-36-36a35.3 35.3 0 0 1 20 6.1V64a8 8 0 0 1 6.1-7.8l128-32a7.9 7.9 0 0 1 6.8 1.5A7.8 7.8 0 0 1 216 32Z"/></svg>
          </Link>
          
          {/* FILE */}
          <Link href="#FILE" className={pages.svg_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h6l2 2h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20Z"/></svg>
          </Link>
          
          {/* USER */}
          <Link href="#" className={pages.svg_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/></svg>
          </Link>
          
          {/* HEART */}
          <Link href="#" className={pages.svg_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>
          </Link>
          
          {/* STAR-FOUR */}
          <Link href="#" className={pages.svg_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M240.6 128a15.8 15.8 0 0 1-10.5 15l-63.9 23.2l-23.2 63.9a16 16 0 0 1-30 0l-23.2-63.9L25.9 143a16 16 0 0 1 0-30l63.9-23.2L113 25.9a16 16 0 0 1 30 0l23.2 63.9l63.9 23.2a15.8 15.8 0 0 1 10.5 15Z"/></svg>
          </Link>
          
          {/* FILE */}
          <Link href="#" className={pages.svg_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h6l2 2h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20Z"/></svg>
          </Link>
          
          {/* SETTINGS */}
          <Link href="#" className={pages.svg_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="white" d="m924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3l-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"/></svg>
          </Link>
        </div>
        
      </div>
      
      <div className={pages.headerUtilities}>
        {/* notification */}
        <div className={pages.notification}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6l2 2m-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10v-7Z"/></svg>
          <div className={pages.notification_dot}></div>
        </div>
        
        {/* search */}
        <div className={pages.searchMuse}>
          <form action="">
            <input type="text" name="search" placeholder="Search" autoComplete="off" className="" aria-label="search"/>
          </form>
        </div>
      </div>
    </div>
  )
}
