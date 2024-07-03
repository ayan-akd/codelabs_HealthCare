import logo from "../assets/logo light.png";

const Footer = () => {
  return (
    <div className="bg-[#020043]">
      <div className="mx-48">
        <footer className="footer  text-base-content pt-24 pb-20 text-[#FFFFF5]">
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
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
