import React, { useEffect } from 'react'
import auth from "../styles/authenticate.module.scss"
import { motion } from 'framer-motion'
import Image from 'next/image'
import museIcon from "../public/muse.svg"
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function authenticate() {
  const router = useRouter();
  
  const list = { hidden: { opacity: 1, x: 0} };
  const icon = {
    hidden: {
      pathLength: 0,
      stroke: "rgba(0, 0, 0, 0)",
      fill: "rgba(0, 0, 0, 0)"
    },
    
    visible: {
      pathLength: 1,
      stroke: "rgba(0, 0, 0, 1)",
      fill: "rgba(0, 0, 0, 1)"
    }
  }
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }
  
  function generateRandomString(length: number): string{
    if(length < 1) return "";
    const str = "qwertyuiopasdfghjklzxcvbnm1234567890";
    let randomString:string = "";
    
    for(let i = 0; i < length; i++) {
      randomString += str[Math.floor(Math.random() * length)];
    }
    
    return randomString + Date.now().toString();
  }
  
  function Authenticate(){
    const CLIENT_URI = "26a09b96340149c3a5f00a1d2646a015";
    const scope = "user-read-private user-read-email";
    const redirect_uri = 'http://localhost:3000';
    const state:string = generateRandomString(16);
    
    router.push({
      pathname: "https://accounts.spotify.com/authorize",
      query: {
        response_type: 'code',
        client_id: CLIENT_URI,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      }
    })
  }
  
  return (
    <div className={auth.container}>
      <div className={auth.authenticate}>
        {/* Muse icon */}
        <motion.div initial={{opacity: 0}} animate="hidden" variants={list} className={auth.logo} title="Muse icon">
          <Image src={museIcon} width={70} height={70} alt="muse" />
          <motion.div initial= {{x: "-5rem", opacity: 0, transitionDelay: ".5rem"}} animate="hidden" transition={spring} variants={list} className={auth.text}>
            <svg width="188" height="87" viewBox="0 0 188 87" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_14_4)">
              <motion.path
                d="M12.9375 78.6875C11.3125 78.7292 9.97917 78.4375 8.9375 77.8125C7.85417 77.1875 7.02083 76.2708 6.4375 75.0625C5.8125 73.8958 5.41667 72.4583 5.25 70.75C5.08333 69.0833 5.08333 67.25 5.25 65.25C5.45833 63.7083 5.83333 62.1042 6.375 60.4375C6.83333 59.0208 7.54167 57.4583 8.5 55.75C9.41667 54.0417 10.6667 52.375 12.25 50.75C12.5833 50.8333 12.8542 50.9375 13.0625 51.0625C13.2708 51.1458 13.4375 51.25 13.5625 51.375C13.6875 51.5417 13.7708 51.6875 13.8125 51.8125C13.8958 52.2708 13.7708 52.7917 13.4375 53.375C13.1042 53.9583 12.7708 54.5833 12.4375 55.25C11.5208 57.1667 10.8333 58.9792 10.375 60.6875C9.91667 62.3958 9.625 63.9792 9.5 65.4375C9.41667 66.6875 9.4375 67.8125 9.5625 68.8125C9.64583 69.8542 9.79167 70.7292 10 71.4375C10.2083 72.1875 10.4375 72.75 10.6875 73.125C10.9375 73.5417 11.1667 73.75 11.375 73.75C11.5833 73.75 11.7917 73.6042 12 73.3125C12.25 73.0208 12.4792 72.6667 12.6875 72.25C12.9375 71.8333 13.2292 71.1875 13.5625 70.3125C13.8958 69.4792 14.25 68.5 14.625 67.375C15 66.25 15.3542 65.0417 15.6875 63.75C16.0625 62.4167 16.3958 61.0833 16.6875 59.75C17.2708 57.0833 17.8958 54.0833 18.5625 50.75C19.2292 47.375 20.2083 43.8542 21.5 40.1875C21.9167 38.6458 22.4375 36.9583 23.0625 35.125C23.5625 33.5417 24.1875 31.7083 24.9375 29.625C25.7292 27.5 26.625 25.2083 27.625 22.75C27.625 22.5417 27.7917 22.3542 28.125 22.1875C28.5 21.9792 28.9167 21.7708 29.375 21.5625C29.875 21.3542 30.4375 21.1458 31.0625 20.9375C31.8958 20.6458 32.5417 20.4792 33 20.4375C33.5 20.3958 33.875 20.4583 34.125 20.625C34.375 20.7917 34.5417 21.0208 34.625 21.3125C34.7083 21.5625 34.75 21.8542 34.75 22.1875C34.8333 23.5625 34.875 24.8542 34.875 26.0625C34.9167 27.2708 34.9583 28.3333 35 29.25C35.0417 30.3333 35.0625 31.3125 35.0625 32.1875C35.1042 33.3542 35.0417 34.9167 34.875 36.875C34.7083 38.7917 34.5208 40.8125 34.3125 42.9375C34.1458 45.0625 33.9792 47.1458 33.8125 49.1875C33.6875 51.1875 33.6667 52.8542 33.75 54.1875C33.75 54.8958 33.7708 55.5625 33.8125 56.1875C33.8958 56.7708 33.9792 57.3542 34.0625 57.9375C34.6042 56.4375 35.2083 54.875 35.875 53.25C36.5417 51.5833 37.2083 50 37.875 48.5C38.5417 46.9583 39.1667 45.5417 39.75 44.25C40.3333 42.9167 40.7917 41.8125 41.125 40.9375C41.625 39.7708 42.2917 38.2917 43.125 36.5C43.9583 34.7083 44.7917 32.9167 45.625 31.125C46.5 29.3333 47.2917 27.6875 48 26.1875C48.75 24.6875 49.2917 23.6458 49.625 23.0625C49.875 22.6458 50.2917 22.2708 50.875 21.9375C51.5 21.6042 52.1458 21.3125 52.8125 21.0625C53.5208 20.8125 54.1667 20.6458 54.75 20.5625C55.375 20.4375 55.7917 20.4167 56 20.5C56.5417 20.625 56.9167 20.7917 57.125 21C57.375 21.2083 57.5208 21.3542 57.5625 21.4375C57.6458 21.6042 57.7083 21.8958 57.75 22.3125C57.7917 22.6875 57.7708 23.2917 57.6875 24.125C57.6042 25.125 57.3542 26.6458 56.9375 28.6875C56.5625 30.7292 56.0833 33.0625 55.5 35.6875C54.9583 38.2708 54.3542 41.0417 53.6875 44C53.0625 46.9583 52.4583 49.875 51.875 52.75C51.2917 55.5833 50.7708 58.25 50.3125 60.75C49.8958 63.25 49.625 65.3542 49.5 67.0625C49.4167 68.9792 49.5417 70.6667 49.875 72.125C50 72.75 50.1875 73.3542 50.4375 73.9375C50.6875 74.5208 51.0208 75.0208 51.4375 75.4375C51.8542 75.8958 52.3542 76.2292 52.9375 76.4375C53.5208 76.6458 54.2083 76.7083 55 76.625C53.9583 77.3333 52.9375 77.8542 51.9375 78.1875C50.9375 78.5208 49.9583 78.6875 49 78.6875C47.9583 78.7292 47.0417 78.5625 46.25 78.1875C45.4583 77.8542 44.7917 77.3542 44.25 76.6875C43.7083 76.0625 43.3125 75.2917 43.0625 74.375C42.8125 73.5 42.7292 72.5208 42.8125 71.4375C42.8958 70.4375 43.1667 68.7917 43.625 66.5C44.0833 64.2083 44.625 61.625 45.25 58.75C45.9167 55.8333 46.625 52.8125 47.375 49.6875C48.1667 46.5208 48.8958 43.5625 49.5625 40.8125C50.2708 38.0208 50.875 35.625 51.375 33.625C51.875 31.625 52.1875 30.3125 52.3125 29.6875C52.3958 29.1875 52.4583 28.7292 52.5 28.3125C52.5833 27.8542 52.6667 27.4583 52.75 27.125C52.3333 27.9583 51.8125 28.9583 51.1875 30.125C50.6042 31.2917 49.9792 32.5417 49.3125 33.875C48.6458 35.2083 47.9583 36.6042 47.25 38.0625C46.5833 39.4792 45.9375 40.8542 45.3125 42.1875C44.2708 44.3542 43.25 46.5833 42.25 48.875C41.25 51.125 40.3542 53.2708 39.5625 55.3125C38.7708 57.3542 38.1042 59.1875 37.5625 60.8125C37.0625 62.4375 36.7708 63.6875 36.6875 64.5625V65.4375C36.6875 65.6875 36.6875 65.9792 36.6875 66.3125C36.7292 66.6458 36.7917 66.9583 36.875 67.25L34.375 69.1875C34 69.3125 33.6667 69.4167 33.375 69.5C33.125 69.5833 32.875 69.625 32.625 69.625C31.6667 69.625 30.9375 69.125 30.4375 68.125C29.9375 67.2083 29.4792 65.4167 29.0625 62.75C28.6458 60.0833 28.5208 56.8125 28.6875 52.9375C28.7708 51.0208 28.8958 49.0833 29.0625 47.125C29.2708 45.1667 29.4583 43.2917 29.625 41.5C29.8333 39.7083 30.0208 38.0417 30.1875 36.5C30.3542 34.9167 30.4375 33.5625 30.4375 32.4375C30.4792 31.6042 30.4583 30.8542 30.375 30.1875C30.2917 29.4792 30.2083 28.8333 30.125 28.25C29.75 29.2083 29.3333 30.5208 28.875 32.1875C28.4167 33.8125 27.9375 35.625 27.4375 37.625C26.9375 39.625 26.4167 41.7292 25.875 43.9375C25.375 46.1458 24.875 48.2708 24.375 50.3125C23.9167 52.3542 23.4792 54.25 23.0625 56C22.6458 57.7083 22.3125 59.0833 22.0625 60.125C21.6458 61.7917 21.2292 63.6875 20.8125 65.8125C20.3958 67.9375 19.875 69.9375 19.25 71.8125C18.625 73.7292 17.8125 75.3333 16.8125 76.625C15.8125 77.9583 14.5208 78.6458 12.9375 78.6875ZM139 64.875C139.25 65.0417 139.562 65.125 139.938 65.125C140.354 65.125 140.75 65.0417 141.125 64.875C141.542 64.7083 141.917 64.4792 142.25 64.1875C142.625 63.8958 142.896 63.5208 143.062 63.0625C143.229 62.6042 143.229 61.9583 143.062 61.125C142.896 60.25 142.625 59.3333 142.25 58.375C141.917 57.375 141.542 56.375 141.125 55.375C140.708 54.375 140.354 53.4583 140.062 52.625C139.812 52 139.604 51.4167 139.438 50.875C139.271 50.4167 139.104 49.9792 138.938 49.5625C138.812 49.1042 138.708 48.7917 138.625 48.625C138.417 48.9583 138.042 49.5 137.5 50.25C137 51 136.438 51.7917 135.812 52.625C135.229 53.4167 134.667 54.1667 134.125 54.875C133.583 55.5417 133.208 56 133 56.25C132.667 56.625 132.333 56.8542 132 56.9375C131.708 56.9792 131.458 56.9167 131.25 56.75C131.042 56.5417 130.917 56.2708 130.875 55.9375C130.875 55.5625 131.042 55.125 131.375 54.625C131.625 54.2917 132 53.7708 132.5 53.0625C133 52.3125 133.5 51.5625 134 50.8125C134.5 50.0208 134.958 49.3333 135.375 48.75C135.792 48.125 136.021 47.75 136.062 47.625C136.146 47.2917 136.021 46.8542 135.688 46.3125C135.396 45.7708 135.354 45.1458 135.562 44.4375C135.729 43.8542 136.104 43.1875 136.688 42.4375C137.271 41.6458 137.958 40.9375 138.75 40.3125C139.542 39.6875 140.354 39.2292 141.188 38.9375C142.021 38.6042 142.771 38.6042 143.438 38.9375C143.979 39.2708 144.417 39.6458 144.75 40.0625C145.083 40.4375 145.208 40.8333 145.125 41.25C145.042 41.4583 144.917 41.7292 144.75 42.0625C144.583 42.3958 144.333 42.8125 144 43.3125C143.667 43.7708 143.188 44.375 142.562 45.125C142.688 46.0833 142.854 46.9583 143.062 47.75C143.312 48.5417 143.542 49.2292 143.75 49.8125C144 50.5208 144.271 51.1667 144.562 51.75C144.938 52.5 145.333 53.2708 145.75 54.0625C146.167 54.8542 146.542 55.6458 146.875 56.4375C147.208 57.1875 147.479 57.8958 147.688 58.5625C147.896 59.2292 147.958 59.7917 147.875 60.25C147.75 60.9583 147.375 61.8125 146.75 62.8125C146.167 63.8125 145.417 64.7917 144.5 65.75C143.625 66.6667 142.604 67.4583 141.438 68.125C140.312 68.7917 139.125 69.125 137.875 69.125C137 69.125 136.146 68.8542 135.312 68.3125C134.521 67.7708 133.833 67.1458 133.25 66.4375C132.708 65.6875 132.292 64.9583 132 64.25C131.75 63.5417 131.729 63 131.938 62.625C132.188 62.125 132.417 61.7292 132.625 61.4375C132.833 61.1458 133.146 60.8125 133.562 60.4375C133.729 60.3125 133.938 60.1667 134.188 60C134.396 59.875 134.688 59.75 135.062 59.625C135.438 59.5 135.875 59.3542 136.375 59.1875C136.792 60.4792 137.167 61.5 137.5 62.25C137.833 62.9583 138.104 63.5208 138.312 63.9375C138.562 64.3958 138.792 64.7083 139 64.875ZM181 54C179.75 55.8333 178.333 57.625 176.75 59.375C175.167 61.0833 173.479 62.625 171.688 64C169.938 65.3333 168.125 66.4167 166.25 67.25C164.417 68.0833 162.625 68.5 160.875 68.5C159.958 68.5 158.958 68.2708 157.875 67.8125C156.833 67.3958 155.875 66.7292 155 65.8125C154.125 64.8958 153.417 63.7083 152.875 62.25C152.375 60.7917 152.229 59.0208 152.438 56.9375C152.604 55.2292 153.125 53.4375 154 51.5625C154.917 49.6458 156.021 47.8958 157.312 46.3125C158.646 44.7292 160.125 43.4167 161.75 42.375C163.417 41.3333 165.083 40.8125 166.75 40.8125C168.333 40.8125 169.479 41.2083 170.188 42C170.896 42.7917 171.208 43.7708 171.125 44.9375C171 46.2292 170.625 47.4167 170 48.5C169.417 49.5833 168.708 50.5625 167.875 51.4375C167.042 52.3125 166.146 53.1042 165.188 53.8125C164.271 54.5208 163.396 55.1667 162.562 55.75C161.646 56.375 160.771 56.9792 159.938 57.5625C159.104 58.1042 158.375 58.6042 157.75 59.0625C157.792 60.1042 157.979 60.9792 158.312 61.6875C158.646 62.3958 159.062 62.9792 159.562 63.4375C160.062 63.8542 160.625 64.1667 161.25 64.375C161.917 64.5417 162.583 64.625 163.25 64.625C164.667 64.625 166.146 64.1875 167.688 63.3125C169.229 62.3958 170.729 61.3125 172.188 60.0625C173.688 58.7708 175.062 57.4375 176.312 56.0625C177.604 54.6875 178.667 53.5 179.5 52.5C179.792 52.1667 180.083 51.9792 180.375 51.9375C180.708 51.8542 180.958 51.8958 181.125 52.0625C181.333 52.1875 181.438 52.4375 181.438 52.8125C181.438 53.1458 181.292 53.5417 181 54ZM165 44.375C164.5 44.375 163.896 44.625 163.188 45.125C162.521 45.625 161.854 46.3542 161.188 47.3125C160.521 48.2292 159.896 49.375 159.312 50.75C158.729 52.0833 158.292 53.625 158 55.375C158.5 55 159.042 54.625 159.625 54.25C160.208 53.8333 160.792 53.3958 161.375 52.9375C163.167 51.5625 164.417 50.3542 165.125 49.3125C165.833 48.2708 166.229 47.375 166.312 46.625C166.396 45.8333 166.312 45.2708 166.062 44.9375C165.812 44.5625 165.458 44.375 165 44.375Z" fill="black"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={spring}
              />
              </g>
              <g filter="url(#filter1_i_14_4)">
              <path d="M64 67.38L65.1101 20.5883C65.1926 17.1136 66.4051 13.808 68.4809 11.3988C70.5568 8.98965 73.3259 7.67422 76.1791 7.74192C79.0324 7.80961 81.736 9.25488 83.6953 11.7598C85.6545 14.2647 86.7089 17.6241 86.6264 21.0988C86.544 24.5736 85.3315 27.8792 83.2557 30.2884C81.1798 32.6975 78.4107 34.013 75.5575 33.9453C73.8976 33.9059 72.3407 33.4195 70.977 32.5631L70.4557 54.5365L101.382 47.2925L102.173 13.9768C102.255 10.502 103.468 7.19644 105.544 4.78727C107.619 2.3781 110.389 1.06267 113.242 1.13036C116.095 1.19806 118.799 2.64333 120.758 5.14824C122.717 7.65314 123.772 11.0125 123.689 14.4873C123.607 17.9621 122.394 21.2676 120.318 23.6768C118.243 26.086 115.473 27.4014 112.62 27.3337C110.96 27.2943 109.403 26.8079 108.04 25.9516L107.299 57.171L64 67.38Z" fill="#66254B"/>
              </g>
              <defs>
              <filter id="filter0_d_14_4" x="1" y="20.375" width="184.438" height="66.375" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_4"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_4" result="shape"/>
              </filter>
              <filter id="filter1_i_14_4" x="64" y="1.12787" width="59.6936" height="70.2522" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_14_4"/>
              </filter>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
        
        <div className={auth.button_parent}><button className={auth.button} onClick={Authenticate}>Use Spotify</button></div>
      </div>
      
      <div className={auth.powered}>Powered by <span className={auth.accent}><Link href={"https://spotify.com/"} target="_parent">Spotify</Link></span></div>
    </div>
  )
}
