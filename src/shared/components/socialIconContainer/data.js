import {
  AiFillLinkedin,
  AiFillGithub,
  // AiFillCodeSandboxCircle,
  AiFillFacebook,
  AiFillInstagram,
  // AiFillTwitterCircle,
} from "react-icons/ai";
import { facebookUrl, githubUrl, instagramUrl, linkedInUrl } from "../../../config/Config";

export const socialIcons = [
  {
    icon: AiFillLinkedin,
    link: linkedInUrl
  },
  {
    icon: AiFillGithub,
    link: githubUrl
  },
  {
    icon: AiFillFacebook,
    link: facebookUrl
  },
  {
    icon: AiFillInstagram,
    link: instagramUrl
  }
]