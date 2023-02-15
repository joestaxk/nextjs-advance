import Image from "next/image"
import Link from "next/link"
import museIcon from "../public/muse.svg"
import sidebar from "../styles/sidebar.module.scss"
import { motion } from "framer-motion"

export default function Sidebar() {
  const list = { hidden: { opacity: 1, x: 0} }
  return  (
    <>
      <div className={sidebar.side_container}>
        {/* MUSE ICON */}
        <motion.div initial={{opacity: 0, x: -15}} animate="hidden" variants={list} title="Muse icon" className={sidebar.side_logo}>
          <Image src={museIcon} alt="muse" />
        </motion.div>
        
        {/* Nav icons */}
        <div className={sidebar.sidebar_icon_links}>
          <motion.ul>
            {/* HOME */}
             <motion.li  initial={{opacity: 0, x: -17}}  animate="hidden" variants={list} className={sidebar.active_sidebar} title="Home">
               <Link href="#">
                 <div className={sidebar.active_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M6 21q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9q.212-.425.587-.7l6-4.5q.275-.2.575-.3q.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7q.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21h-4v-7h-4v7Z"/></svg>
                 </div>
                 <div className={sidebar.unactive_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm0 2q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9q.212-.425.587-.7l6-4.5q.275-.2.575-.3q.3-.1.625-.1t.625.1q.3.1.575.3l6 4.5q.375.275.588.7q.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21h-5v-6h-2v6Zm6-8.75Z"/></svg>
                 </div>
               </Link>
             </motion.li>
             
             {/* MUSIC */}
             <motion.li  initial={{opacity: 0, x: -20}} animate="hidden" variants={list} title="Music">
               <Link href="#">
                <div className={sidebar.active_icon}>   
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M216 32v140a36 36 0 1 1-36-36a35.3 35.3 0 0 1 20 6.1V42.2l-112 28V204a36 36 0 1 1-36-36a35.3 35.3 0 0 1 20 6.1V64a8 8 0 0 1 6.1-7.8l128-32a7.9 7.9 0 0 1 6.8 1.5A7.8 7.8 0 0 1 216 32Z"/></svg>
                 </div>
                 <div className={sidebar.unactive_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M211.7 27.3a5.8 5.8 0 0 0-5.2-1.1l-128 32A5.9 5.9 0 0 0 74 64v114.1A34 34 0 1 0 86 204V68.7l116-29v106.4a34 34 0 1 0 12 25.9V32a6.1 6.1 0 0 0-2.3-4.7ZM52 226a22 22 0 1 1 22-22a22.1 22.1 0 0 1-22 22Zm128-32a22 22 0 1 1 22-22a22.1 22.1 0 0 1-22 22Z"/></svg>
                 </div>
               </Link>
             </motion.li>
             
              {/* FILE */}
               <motion.li  initial={{opacity: 0, x: -22}} animate="hidden" variants={list} title="File">
               <Link href="#">
                <div className={sidebar.active_icon}>  
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h6l2 2h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20Z"/></svg>
                 </div>
                 <div className={sidebar.unactive_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h6l2 2h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12Z"/></svg>
                 </div>
               </Link>
             </motion.li>
             
              {/* USER */}
              <motion.li  initial={{opacity: 0, x: -25}} animate="hidden" variants={list} title="User">
               <Link href="#">
               <div className={sidebar.active_icon}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/></svg>
                 </div>
                 <div className={sidebar.unactive_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1Z"/></svg>
                 </div>
               </Link>
             </motion.li>
          </motion.ul>
          
          {/* DIVIDER */}
          <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} className={sidebar.divider}></motion.div>
          
          <motion.ul>
            {/* HEART */}
             <motion.li  initial={{opacity: 0, x: -28}} animate="hidden" variants={list} title="Favourite">
               <Link href="#">
               <div className={sidebar.active_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"/></svg>
                 </div>
                 <div className={sidebar.unactive_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"/></svg>
                 </div>
               </Link>
             </motion.li>
             
             {/* STAR-FOUR */}
             <motion.li  initial={{opacity: 0, x: -30}} animate="hidden" variants={list}>
               <Link href="#">
                <div className={sidebar.active_icon}>   
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M240.6 128a15.8 15.8 0 0 1-10.5 15l-63.9 23.2l-23.2 63.9a16 16 0 0 1-30 0l-23.2-63.9L25.9 143a16 16 0 0 1 0-30l63.9-23.2L113 25.9a16 16 0 0 1 30 0l23.2 63.9l63.9 23.2a15.8 15.8 0 0 1 10.5 15Z"/></svg>
                 </div>
                 <div className={sidebar.unactive_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="m230.1 113l-63.9-23.2L143 25.9a16 16 0 0 0-30 0L89.8 89.8L25.9 113a16 16 0 0 0 0 30l63.9 23.2l23.2 63.9a16 16 0 0 0 30 0l23.2-63.9l63.9-23.2a16 16 0 0 0 0-30Zm-69.3 38.2a15.7 15.7 0 0 0-9.6 9.6L128 224.6l-23.2-63.8a15.7 15.7 0 0 0-9.6-9.6L31.4 128l63.8-23.2a15.7 15.7 0 0 0 9.6-9.6L128 31.4l23.2 63.8a15.7 15.7 0 0 0 9.6 9.6l63.8 23.2Z"/></svg>
                 </div>
               </Link>
             </motion.li>
             
              {/* FILE */}
               <motion.li  initial={{opacity: 0, x: -32}} animate="hidden" variants={list}>
               <Link href="#">
                <div className={sidebar.active_icon}>  
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h6l2 2h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20Z"/></svg>
                 </div>
                 <div className={sidebar.unactive_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h6l2 2h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12Z"/></svg>
                 </div>
               </Link>
             </motion.li>
          </motion.ul>
         </div>
         
         {/* SETTING */}
         <div className={sidebar.sidebar_setting}>
              <SettingIconActive />
              <SettingIconUnactive />
         </div>
      </div>
    </>
  )
}


function SettingIconActive(){
  return (
    <div className={sidebar.active_icon}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="white" d="M11.078 0c.294 0 .557.183.656.457l.706 1.957c.253.063.47.126.654.192c.201.072.46.181.78.33l1.644-.87a.702.702 0 0 1 .832.131l1.446 1.495c.192.199.246.49.138.744l-.771 1.807c.128.235.23.436.308.604c.084.183.188.435.312.76l1.797.77c.27.115.437.385.419.674l-.132 2.075a.69.69 0 0 1-.46.605l-1.702.605c-.049.235-.1.436-.154.606a8.79 8.79 0 0 1-.298.774l.855 1.89a.683.683 0 0 1-.168.793l-1.626 1.452a.703.703 0 0 1-.796.096l-1.676-.888a7.23 7.23 0 0 1-.81.367l-.732.274l-.65 1.8a.696.696 0 0 1-.64.457L9.11 20a.697.697 0 0 1-.669-.447l-.766-2.027a14.625 14.625 0 0 1-.776-.29a9.987 9.987 0 0 1-.618-.293l-1.9.812a.702.702 0 0 1-.755-.133L2.22 16.303a.683.683 0 0 1-.155-.783l.817-1.78a9.517 9.517 0 0 1-.302-.644a14.395 14.395 0 0 1-.3-.811L.49 11.74a.69.69 0 0 1-.49-.683l.07-1.921a.688.688 0 0 1 .392-.594L2.34 7.64c.087-.319.163-.567.23-.748a8.99 8.99 0 0 1 .314-.712L2.07 4.46a.683.683 0 0 1 .15-.79l1.404-1.326a.702.702 0 0 1 .75-.138l1.898.784c.21-.14.4-.253.572-.344c.205-.109.479-.223.824-.346l.66-1.841A.696.696 0 0 1 8.984 0h2.094Zm-1.054 7.019c-1.667 0-3.018 1.335-3.018 2.983c0 1.648 1.351 2.984 3.018 2.984c1.666 0 3.017-1.336 3.017-2.984s-1.35-2.983-3.017-2.983Z"/></svg>
    </div>
  )
}


function SettingIconUnactive(){
  return (
    <div className={sidebar.unactive_icon}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="white" d="m924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3l-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"/></svg>
    </div>
  )
}