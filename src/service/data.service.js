import axios from "../helper/axios";

export async function getHomePage() {
  const { data } = await axios.get("home-page?populate=*");
  return data;
}



export async function getAbout() {
  const { data } = await axios.get("about");
  return data;
}
