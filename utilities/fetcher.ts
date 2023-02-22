import axios from "axios";

type fetchType = {
    url: string;
    header?: {}
}

export const fetcher:(arg0:string) => void = () => ({url, header}: fetchType) => axios.get(url, header).then(res => res.data)



