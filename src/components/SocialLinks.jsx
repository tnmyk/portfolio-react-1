import { RiTwitterFill } from "react-icons/ri";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiClipboard } from "react-icons/bi";
const SocialFlex = () => {
  const copyEmail=()=>{
    navigator.clipboard.writeText('tanmaykachroo@gmail.com');
    const toolText = document.querySelector('.copy-tooltext')
    toolText.textContent ='Email Copied!'
    setTimeout(()=>{
    toolText.textContent = "Copy Email";

    },2000)
  }
  return (
    <div className="social-flex">
      <div>
        <div className="email">
          <HiOutlineMail /> &nbsp;Email: tanmaykachroo@gmail.com
        </div>
        <span class="copy" onClick={copyEmail}>
          <BiClipboard /> <span className="copy-tooltext">Copy Email</span>
        </span>
      </div>
      <a
        href="https://github.com/tanmayk5"
        target="_blank"
        rel="noreferrer"
        className="social"
      >
        <GrGithub />
        &nbsp;Github
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="social"
      >
        <FaLinkedinIn />
        &nbsp;Linkedin
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noreferrer"
        className="social"
      >
        <RiTwitterFill />
        &nbsp;Twitter
      </a>
    </div>
  );
};

export default SocialFlex;
