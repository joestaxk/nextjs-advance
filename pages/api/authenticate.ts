import type { NextApiRequest, NextApiResponse } from 'next'
var SpotifyWebApi = require('spotify-web-api-node');

type Data = {
    name: string
}

const CLIENT_URL = '26a09b96340149c3a5f00a1d2646a015';
const CLIENT_SECRET = '7a1f01a8bba34f4283f9bc99aabf3ca6'
const REDIRECT_URI = 'http://localhost:3000';
type credentialType<T> = {
  clientId: T,
  clientSecret: T,
  redirectUri: T
}
let credentials:credentialType<string> = {
  clientId: CLIENT_URL,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
   const code = req.body.code;
   try {
    let spotifyApi = new SpotifyWebApi(credentials);
    
    const data: {body: {expires_in: number, access_token: string, refresh_token: string}} = await spotifyApi.authorizationCodeGrant(code)
    
    const responseData:any = {
      expires_in: data.body['expires_in'],
      access_token: data.body['access_token'],
      refresh_token: data.body['refresh_token']
    }
    
    res.json(responseData)
     
   } catch (error:any) {
    res.status(400).send(error)
   }
  }