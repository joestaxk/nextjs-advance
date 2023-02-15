import React from 'react'
import sidepanel from "../styles/sidebar.module.scss"
import { motion } from "framer-motion"

export default function Sidepanel() {
  return (
    <main className={sidepanel.sidepanel_container}>
      <NextComposition />
    </main>
  )
}


function NextComposition() {
  return (
    <div className={sidepanel.sidepanel_container_left}>
        <div className={sidepanel.sidepanel_component}>
          <div className={sidepanel.sidepanel_composition}>
              <div className={sidepanel.sidepanel_title}>Next Composition</div>
              
              <div className={sidepanel.sidepanel_icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M12 19q-.425 0-.712-.288Q11 18.425 11 18v-5H6q-.425 0-.713-.288Q5 12.425 5 12t.287-.713Q5.575 11 6 11h5V6q0-.425.288-.713Q11.575 5 12 5t.713.287Q13 5.575 13 6v5h5q.425 0 .712.287q.288.288.288.713t-.288.712Q18.425 13 18 13h-5v5q0 .425-.287.712Q12.425 19 12 19Z"/></svg>
              </div>
          </div>

          {/* NEXT MUSIC ON THE LIST */}
          <div className={sidepanel.sidepanel_next_music_list}>
            <div className={sidepanel.sidepanel_music_menu}>
              {/* info-icon */}
                <div className={sidepanel.sidepanel_info_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><circle cx="64" cy="128" r="12" fill="white"/><circle cx="192" cy="128" r="12" fill="white"/><circle cx="128" cy="128" r="12" fill="white"/></svg>
                </div>
                
                {/* Player */}
                <div className={sidepanel.sidepanel_player}>
                    {/* title */}
                    <div className={sidepanel.sidepanel_title}>
                        <div className={sidepanel.sidepanel_bigtext}>The Dark Side</div>
                        {/* artist */}
                        <div className={sidepanel.sidepanel_artist}>
                        {/* music icon */}
                          <div className={sidepanel.sidepanel_staff}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M216 32v140a36 36 0 1 1-36-36a35.3 35.3 0 0 1 20 6.1V42.2l-112 28V204a36 36 0 1 1-36-36a35.3 35.3 0 0 1 20 6.1V64a8 8 0 0 1 6.1-7.8l128-32a7.9 7.9 0 0 1 6.8 1.5A7.8 7.8 0 0 1 216 32Z"/></svg>
                          </div>
                          
                          <div className={sidepanel.sidepanel_text}>
                              {/* title */}
                            <label>Muse- </label>
                            {/* Album */}
                            <span>simultaneos theory</span>
                          </div>
                        </div>
                    </div>
                    
                    {/* play icon */}
                    <div className={sidepanel.sidepanel_playicon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 9.325v5.35q0 .575.525.875q.525.3 1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05q-.525.3-.525.875ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
                    </div>
                </div>
            </div>
            <div className={sidepanel.sidepanel_music_menu}>
              {/* info-icon */}
                <div className={sidepanel.sidepanel_info_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><circle cx="64" cy="128" r="12" fill="white"/><circle cx="192" cy="128" r="12" fill="white"/><circle cx="128" cy="128" r="12" fill="white"/></svg>
                </div>
                
                {/* Player */}
                <div className={sidepanel.sidepanel_player}>
                    {/* title */}
                    <div className={sidepanel.sidepanel_title}>
                        <div className={sidepanel.sidepanel_bigtext}>The Dark Side</div>
                        {/* artist */}
                        <div className={sidepanel.sidepanel_artist}>
                        {/* music icon */}
                          <div className={sidepanel.sidepanel_staff}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M216 32v140a36 36 0 1 1-36-36a35.3 35.3 0 0 1 20 6.1V42.2l-112 28V204a36 36 0 1 1-36-36a35.3 35.3 0 0 1 20 6.1V64a8 8 0 0 1 6.1-7.8l128-32a7.9 7.9 0 0 1 6.8 1.5A7.8 7.8 0 0 1 216 32Z"/></svg>
                          </div>
                          
                          <div className={sidepanel.sidepanel_text}>
                              {/* title */}
                            <label>Muse- </label>
                            {/* Album */}
                            <span>simultaneos theory</span>
                          </div>
                        </div>
                    </div>
                    
                    {/* play icon */}
                    <div className={sidepanel.sidepanel_playicon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 9.325v5.35q0 .575.525.875q.525.3 1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05q-.525.3-.525.875ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
                    </div>
                </div>
            </div>
            <div className={sidepanel.sidepanel_music_menu}>
              {/* info-icon */}
                <div className={sidepanel.sidepanel_info_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><circle cx="64" cy="128" r="12" fill="white"/><circle cx="192" cy="128" r="12" fill="white"/><circle cx="128" cy="128" r="12" fill="white"/></svg>
                </div>
                
                {/* Player */}
                <div className={sidepanel.sidepanel_player}>
                    {/* title */}
                    <div className={sidepanel.sidepanel_title}>
                        <div className={sidepanel.sidepanel_bigtext}>The Dark Side</div>
                        {/* artist */}
                        <div className={sidepanel.sidepanel_artist}>
                        {/* music icon */}
                          <div className={sidepanel.sidepanel_staff}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M216 32v140a36 36 0 1 1-36-36a35.3 35.3 0 0 1 20 6.1V42.2l-112 28V204a36 36 0 1 1-36-36a35.3 35.3 0 0 1 20 6.1V64a8 8 0 0 1 6.1-7.8l128-32a7.9 7.9 0 0 1 6.8 1.5A7.8 7.8 0 0 1 216 32Z"/></svg>
                          </div>
                          
                          <div className={sidepanel.sidepanel_text}>
                              {/* title */}
                            <label>Muse- </label>
                            {/* Album */}
                            <span>simultaneos theory</span>
                          </div>
                        </div>
                    </div>
                    
                    {/* play icon */}
                    <div className={sidepanel.sidepanel_playicon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 9.325v5.35q0 .575.525.875q.525.3 1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05q-.525.3-.525.875ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
                    </div>
                </div>
            </div>
            <div className={sidepanel.sidepanel_music_menu}>
              {/* info-icon */}
                <div className={sidepanel.sidepanel_info_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><circle cx="64" cy="128" r="12" fill="white"/><circle cx="192" cy="128" r="12" fill="white"/><circle cx="128" cy="128" r="12" fill="white"/></svg>
                </div>
                
                {/* Player */}
                <div className={sidepanel.sidepanel_player}>
                    {/* title */}
                    <div className={sidepanel.sidepanel_title}>
                        <div className={sidepanel.sidepanel_bigtext}>The Dark Side</div>
                        {/* artist */}
                        <div className={sidepanel.sidepanel_artist}>
                        {/* music icon */}
                          <div className={sidepanel.sidepanel_staff}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M216 32v140a36 36 0 1 1-36-36a35.3 35.3 0 0 1 20 6.1V42.2l-112 28V204a36 36 0 1 1-36-36a35.3 35.3 0 0 1 20 6.1V64a8 8 0 0 1 6.1-7.8l128-32a7.9 7.9 0 0 1 6.8 1.5A7.8 7.8 0 0 1 216 32Z"/></svg>
                          </div>
                          
                          <div className={sidepanel.sidepanel_text}>
                              {/* title */}
                            <label>Muse- </label>
                            {/* Album */}
                            <span>simultaneos theory</span>
                          </div>
                        </div>
                    </div>
                    
                    {/* play icon */}
                    <div className={sidepanel.sidepanel_playicon}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 9.325v5.35q0 .575.525.875q.525.3 1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05q-.525.3-.525.875ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
                    </div>
                </div>
            </div>
          </div>
          
          
          {/* CURRENT MUSIC */}
          <div
          className={sidepanel.sidepanel_muse_controller}>
            <div className={sidepanel.sidepanel_inner_muse_controller}>
              {/* COVER PHOTO */}
              <div className={sidepanel.sidepanel_cover_photo}></div>
              
              {/* TITLE */}
              <div className={sidepanel.sidepanel_muse_title}>
                {/* MUSIC NAME */}
                <div className={sidepanel.sidepanel_muse_name}>Resistance</div>
                {/*MUSIC ARTIST*/}
                <div className={sidepanel.sidepanel_muse_artist}>Muse</div>
              </div>
              
              {/* MUSIC BUTTON FUNCTION PANEL */}
              <div className={sidepanel.sidepanel_button_fn}>
                  {/* REPEAT */}
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="#fff" d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777a.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777a.5.5 0 0 1 .225-.67Z"/></svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="currentColor"><path d="M11 4v1.466a.25.25 0 0 0 .41.192l2.36-1.966a.25.25 0 0 0 0-.384l-2.36-1.966a.25.25 0 0 0-.41.192V3H5a5 5 0 0 0-4.48 7.223a.5.5 0 0 0 .896-.446A4 4 0 0 1 5 4h6Zm4.48 1.777a.5.5 0 0 0-.896.446A4 4 0 0 1 11 12H5.001v-1.466a.25.25 0 0 0-.41-.192l-2.36 1.966a.25.25 0 0 0 0 .384l2.36 1.966a.25.25 0 0 0 .41-.192V13h6a5 5 0 0 0 4.48-7.223Z"/><path d="M9 5.5a.5.5 0 0 0-.854-.354l-1.75 1.75a.5.5 0 1 0 .708.708L8 6.707V10.5a.5.5 0 0 0 1 0v-5Z"/></g></svg> */}
                  </div>
                  
                  {/* PREV PLAY NEXT */}
                  <div className={sidepanel.sidepanel_prev_play_next}>
                    {/* PREV */}
                    <motion.div 
                    whileTap={{ scale: 1.16}}
                    className={sidepanel.sidepanel_prev}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="white" d="M6 5a1 1 0 0 0-2 0v22a1 1 0 1 0 2 0V5Zm22.003 1.504c0-2.002-2.236-3.192-3.897-2.073l-14.003 9.432A2.5 2.5 0 0 0 10.09 18l14.003 9.56c1.66 1.132 3.91-.056 3.91-2.066V6.506Z"/></svg>
                    </motion.div>
                    
                    {/* PLAY */}
                    <motion.div 
                      whileTap={{ scale: 1.16}}
                      className={sidepanel.sidepanel_play}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M9.5 9.325v5.35q0 .575.525.875q.525.3 1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05q-.525.3-.525.875ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
                    </motion.div>
                    
                    {/* NEXT */}
                    <motion.div 
                    whileTap={{ scale: 1.16}}
                    className={sidepanel.sidepanel_next}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="white" d="M2 3.002a1 1 0 0 1 1.578-.816l7 4.963a1 1 0 0 1 .007 1.628l-7 5.037A1 1 0 0 1 2 13.003V3.002ZM14 2.5a.5.5 0 1 0-1 0v11a.5.5 0 0 0 1 0v-11Z"/></svg>
                    </motion.div>
                  </div>
                  
                  {/* SHUFFLE */}
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M237.7 178.3a8.1 8.1 0 0 1 0 11.4l-24 24a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4l10.4-10.3h-11.8a72.2 72.2 0 0 1-58.6-30.2l-41.7-58.3A56.1 56.1 0 0 0 55.1 80H32a8 8 0 0 1 0-16h23.1a72.2 72.2 0 0 1 58.6 30.2l41.7 58.3a56.1 56.1 0 0 0 45.5 23.5h11.8l-10.4-10.3a8.1 8.1 0 0 1 11.4-11.4ZM143 107a8 8 0 0 0 11.2-1.9l1.2-1.6A56.1 56.1 0 0 1 200.9 80h11.8l-10.4 10.3a8.1 8.1 0 0 0 0 11.4a8.2 8.2 0 0 0 11.4 0l24-24a8.1 8.1 0 0 0 0-11.4l-24-24a8.1 8.1 0 0 0-11.4 11.4L212.7 64h-11.8a72.2 72.2 0 0 0-58.6 30.2l-1.1 1.6A8 8 0 0 0 143 107Zm-30 42a8 8 0 0 0-11.2 1.9l-1.2 1.6A56.1 56.1 0 0 1 55.1 176H32a8 8 0 0 0 0 16h23.1a72.2 72.2 0 0 0 58.6-30.2l1.1-1.6A8 8 0 0 0 113 149Z"/></svg> 
                  </div>
              </div>
              {/* MUSIC WAVE */}
              <div className={sidepanel.sidepanel_muse_wave}>
                <audio src=""></audio>
              </div>
            </div>
          </div>
      </div>
  </div>
  )
}