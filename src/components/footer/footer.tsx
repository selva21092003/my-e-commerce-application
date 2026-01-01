import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconButton } from "../icon-button/icon-button";

const Footer = () => {
  return (
    <div className="flex justify-center py-2">
      <div className="flex flex-col items-center gap-3">
        <p className="font-semibold">Made By Selva Agashu ❤️</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/selva21092003?tab=repositories"
            target="_blank"
          >
            <IconButton>
              <FaGithub className="w-8 h-8" />
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/selva-agashu-051851292/"
            target="_blank"
          >
            <IconButton>
              <FaLinkedin className="w-8 h-8" />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
