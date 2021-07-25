import CM from "../components/Content/contactMe";
const socials = {
  GitHub: "https://github.com/TasmeTime",
  Instagram: "https://www.instagram.com/thetasmetime/",
  LinkedIn: "https://www.linkedin.com/in/moslem-azad/",
  Twitter: "https://twitter.com/TheTasmeTime",
  Youtube: "https://www.youtube.com/channel/UCwDaYpbaakiM6pplB8x_0RA",
  Email: "mailto:moslem.azad.shmhle@outlook.com",
};
const ContactMe = (props) => {
  return <CM Socials={socials} />;
};
export default ContactMe;
