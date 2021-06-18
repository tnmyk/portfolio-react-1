import { RiTwitterFill } from "react-icons/ri";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const SocialFlex = () => {
  return (
    <div className="social-flex">
      <div className="email">
        <HiOutlineMail /> &nbsp;Email: tanmaykachroo@gmail.com
      </div>
      <div className="social">
        <GrGithub />
        &nbsp;Github
      </div>
      <div className="social">
        <FaLinkedinIn />
        &nbsp;Linkedin
      </div>
      <div className="social">
        <RiTwitterFill />
        &nbsp;Twitter
      </div>
    </div>
  );
};

export default SocialFlex;
