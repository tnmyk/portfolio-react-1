import { RiTwitterFill } from "react-icons/ri";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const SocialFlex = () => {
  return (
    <div className="social-flex">
      <a href="/" className="email">
        <HiOutlineMail /> &nbsp;Email: tanmaykachroo@gmail.com
      </a>
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
