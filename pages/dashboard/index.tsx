import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HomeComponent from '../../components/homeComponent'
import LoadingApp from '../../components/loadingSkelenton/loadingApp';
import Sidebar from '../../components/sidebar.'
import Sidepanel from '../../components/sidepanel'
import useAuth from '../../hooks/useAuth';
import authContext, { authContextStateType, userProfile } from '../../utilities/auth.context';

export default function Dashboard(code:string|any) {
  const auth:string = useAuth(code);
  const [userProfile, setUserProfile] = useState({} as userProfile<string>);
  const [context, setContext] = useState({} as authContextStateType<string>);
  
  async function fetchProfile(code: string) {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${code}` }
    });
    return await result.json();
  }
  
  useEffect(() => {
    if(!auth) return;

    fetchProfile(auth).then((profile) => {
      const {display_name, id, image, country} = profile;
      setUserProfile({
        display_name,
        id,
        image,
        country
      })
    }).catch((error) => {
      console.log(error);
    })    
  }, [auth]);
  
  useEffect(() => {
    setContext({auth, userProfile});
  }, [auth, userProfile])
  
  return (
   <>
    {
      !auth || !userProfile ? 
      <LoadingApp />
      :
      <>
        <Sidebar />
        <authContext.Provider value={context}>
          <Sidepanel />
          <HomeComponent />
        </authContext.Provider>
      </>
    }

  </>
  )
}
