import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Dashboard from './dashboard';

export default function Home() {
  const router = useRouter();
  const [code, setCode] = useState<string|any>(null)
  useEffect(() => {
    let params = new URLSearchParams(router.asPath.replace(router.pathname, ''));
    const code = params.get('code');
    if(!code) {
      router.push('/authenticate')
    }
    setCode(code)
  }, [code])
  
  
  return (
   <>
      <Dashboard code={code} />
   </>
  )
}
