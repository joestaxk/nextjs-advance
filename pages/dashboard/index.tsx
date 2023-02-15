import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HomeComponent from '../../components/homeComponent'
import Sidebar from '../../components/sidebar.'
import Sidepanel from '../../components/sidepanel'


export default function Dashboard(code:string|any) {
  // const auth = useAuth(code);

  return (
   <>
    <Sidebar />
    <Sidepanel />
    <HomeComponent />
   </>
  )
}
