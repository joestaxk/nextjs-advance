import type { NextApiRequest, NextApiResponse } from 'next'
import { it } from 'node:test';
var SpotifyWebApi = require('spotify-web-api-node');

const CLIENT_URL = '26a09b96340149c3a5f00a1d2646a015';
const CLIENT_SECRET = '7a1f01a8bba34f4283f9bc99aabf3ca6'
const REDIRECT_URI = 'http://localhost:3000';
type credentialType<T> = {
  clientId: T,
  clientSecret: T,
  redirectUri: T
}

type Data = {
  access_token: string
  expires_in: number
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
  try {
    const refresh_token = req.body.refresh_token;
    console.log(refresh_token)
    let spotifyApi = new SpotifyWebApi({...credentials, refreshToken: refresh_token});
    
    const data:any = await spotifyApi.refreshAccessToken();
    if(typeof data.body.access_token == "string") {
      res.json({
        access_token: data.body.access_token,
        expires_in: data.body.expires_in
      })
    }
  } catch (error) {
    console.log(error)
  }
}