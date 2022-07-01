import ShoutOut from "../models/shoutoutInterface";
import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;

if (!baseUrl) {
  console.error("Missing config REACT_APP_SHOUTOUT_API_URL");
}

export function fetchAllShoutouts(): Promise<ShoutOut[]> {
  return axios.get<ShoutOut[]>(`${baseUrl}/shoutouts`).then((res) => res.data);
}

export function addShoutout(shoutout: ShoutOut): Promise<ShoutOut> {
  return axios
    .post<ShoutOut>(`${baseUrl}/shoutouts`, shoutout)
    .then((response) => response.data);
}
