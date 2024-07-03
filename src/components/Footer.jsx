import logo from "../assets/logo light.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#020043]">
      <div className="mx-48">
        <footer className="footer pt-24 pb-20 text-[#FFFFF5]">
          <aside>
            <img src={logo} alt="" />
            <p className="mt-8 mb-3">
              123 Main Street Anytown, USA <br />
              Postal Code: 12345
            </p>
            <p>
              Support:support@oyolloo.com <br />
              (Available : 10:00am to 07:00pm)
            </p>
          </aside>
          <nav className="space-y-2 mt-16">
            <a className="link link-hover">Home</a>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Success Page</a>
            <a className="link link-hover">Terms and condition</a>
          </nav>
          <nav className="space-y-2 mt-16">
            <a className="link link-hover">Services </a>
            <a className="link link-hover">Scheduling</a>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">Patient Portal</a>
          </nav>
          <nav className="mt-16">
            <a className="link link-hover">Follow Us</a>
            <a className="link link-hover flex gap-7 mt-2 text-2xl">
              <FaFacebook></FaFacebook>
              <FaInstagram></FaInstagram>
              <svg
                width="23.133789"
                height="23.133789"
                viewBox="0 0 23.1338 23.1338"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M11.56 0C5.17 0 0 5.17 0 11.56C0 17.95 5.17 23.13 11.56 23.13C17.95 23.13 23.13 17.95 23.13 11.56C23.13 5.17 17.95 0 11.56 0ZM8.73 16.36L6.39 16.36L6.39 8.82L8.73 8.82L8.73 16.36ZM7.54 7.89C6.81 7.89 6.33 7.37 6.33 6.72C6.33 6.06 6.82 5.55 7.58 5.55C8.33 5.55 8.79 6.06 8.81 6.72C8.81 7.37 8.33 7.89 7.54 7.89ZM17.29 16.36L14.94 16.36L14.94 12.18C14.94 11.21 14.6 10.55 13.76 10.55C13.11 10.55 12.72 10.99 12.55 11.42C12.49 11.58 12.48 11.79 12.48 12.01L12.48 16.35L10.13 16.35L10.13 11.22C10.13 10.28 10.1 9.49 10.07 8.82L12.11 8.82L12.21 9.86L12.26 9.86C12.57 9.37 13.32 8.65 14.59 8.65C16.13 8.65 17.29 9.68 17.29 11.9L17.29 16.36Z"
                  fill="#FFFFF5"
                />
              </svg>

              <FaYoutube></FaYoutube>
            </a>
            <a className="link link-hover mt-7">@Docplus 2024</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
