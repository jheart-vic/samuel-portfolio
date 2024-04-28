import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";
import facebookIcon from "../assets/facebook.png";
import instaIcon from "../assets/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/samuel-chidi-0b4452235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedinIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/Samuelchukwuk12?t=rYVpq3na8cVYTw5KZDr_JA&s=35"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={twitterIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/share/F1hiUt9oHRrCpn8C/?mibextid=qi2Omg"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebookIcon} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/samuel_chukwuka_chidi?igsh=MWV4YWhjc21tcDMxZg=="
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={instaIcon} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
