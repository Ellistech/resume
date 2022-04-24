import axios from "../helper/axios";

export async function getHomePage() {
  const { data } = await axios.get("home-page?populate=*");
  return data;
}



export async function getAbout() {
  const { data } = await axios.get("about");
  return data;
}



export async function getService() {
  const { data } = await axios.get("service?populate=*");
  return data;
}



export async function postContact(body) {
  const { data } = await axios.post("contacts", {
    data: body
  });
  return data;
}



export async function getTestimonial() {
  const { data } = await axios.get("testimonial?populate=*");
  return data;
}




export async function getFact() {
  const { data } = await axios.get("fact?populate=*");
  return data;
}

