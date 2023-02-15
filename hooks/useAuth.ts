import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function useAuth({code}:{code: string}){
    const router = useRouter()
    const [expires_in, setExpireIn] = useState(0);
    const [access_token, setAccessToken] = useState(null);
    const [refresh_token, setRefreshToken] = useState(null);
    
    useEffect(() => {
        if(code) {
            axios.post(`/api/authenticate`, {code}).then(res => {
                window.history.pushState({}, "", '/') 
                const {expires_in, access_token, refresh_token} = res.data;                
                setExpireIn(expires_in)
                setAccessToken(access_token)
                setRefreshToken(refresh_token)
            }).catch(err => {
                console.log(err);
                router.push('/authenticate')
            })
        }
    } , [code])
    
    useEffect(() => {
    if(!refresh_token || !expires_in) return;
        const interval:any = setInterval(() => {
            axios.post(`/api/refresh`, {refresh_token}).then(res => {
                console.log(res);
                setRefreshToken(res.data.refresh_token);
                setExpireIn(res.data.expires_in);
            }).catch(err => {
                router.push('/authenticate')
            })
        }, (expires_in -  60) * 1000)
         
         return () => clearInterval(interval)
    },[refresh_token, expires_in])
    
    return access_token;
}