import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const LinkGit = () => {
  return (
    <div className='d-flex align-items-center justify-content-center m2 p-2'>
        <a href="https://github.com/JuanToranzos" target='_blank' className='ms-3 p-2 m-2 text-white rounded shadow '><FaGithub size={40} id='iconos' /></a>
        <a href="https://www.linkedin.com/in/juan-toranzos-b46b77253/" target='_blank' className='ms-3 p-2 m-2 text-white rounded shadow '><FaLinkedin size={40} id='iconos' /></a>

     
     
    </div>
  )
}
