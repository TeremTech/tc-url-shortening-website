import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export function SocialIcons() {
  return (
    <div className="flex gap-4 text-2xl mt-8 lg:mt-0 justify-center lg:justify-start">
      <a className="hover:text-cyan-500" href="#">
        <FaFacebookSquare />
      </a>
      <a className="hover:text-cyan-500" href="#">
        <FaTwitter />
      </a>
      <a className="hover:text-cyan-500" href="#">
        <FaPinterest />
      </a>
      <a className="hover:text-cyan-500" href="#">
        <FaInstagram />
      </a>
    </div>
  );
}
