import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          At Evogym, we believe in transforming lives through fitness.Join us today and embark on a journey of self-improvement and well-being.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">123 Main Street, New York.</p>
          <p>(333)425-6825</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Socials</h4>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-primary-500">
              <FontAwesomeIcon className="w-8 h-8" icon={faFacebook} />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-500">
              <FontAwesomeIcon className="w-8 h-8" icon={faInstagram} />
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-500">
              <FontAwesomeIcon  className="w-8 h-8" icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
