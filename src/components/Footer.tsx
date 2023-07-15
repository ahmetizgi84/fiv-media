import { ArrowRightShort } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="relative">
      <div className="footer-container">
        <div className="max-w-7xl mx-auto py-20 relative z-[7]">
          <div className="p-[20px] border border-white/[0.1] rounded-xl mb-[80px] text-center">
            <h2 className="text-[80px] font-[600]">
              <a href="page-contact.html" className="inline-block decoration-none">
                Let's <span className="stroke"> Discuss</span>
              </a>
              <span className="inline-block">
                <svg
                  width="80"
                  height="80"
                  className="align-middle"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                    fill="currentColor"></path>
                </svg>
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[25%] px-[15px]">
              <div className="colum md-mb50">
                <div className="mb-[20px]">
                  <h6 className="text-[20px] font-[500]">Address</h6>
                </div>
                <div className="text">
                  <p className="text-base font-[300] text-gray-300">
                    Germany — 785 15h Street, Office 478 Berlin, De 81566
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[25%] px-[15px] ml-[8.3%]">
              <div className="colum md-mb50">
                <div className="mb-[20px]">
                  <h6 className="text-[20px] font-[500]">Say Hello</h6>
                </div>
                <div className="text">
                  <p className="text-base font-[300] text-gray-300 mb-[10px]">
                    <a href="#0">hello@design.com</a>
                  </p>
                  <h5 className="text-[24px] font-[500]">
                    <a className="inline-block" href="#">
                      +1 840 841 25 69
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="w-[16.6%] px-[15px]">
              <div className="mb-[20px]">
                <h6 className="text-[20px] font-[500]">Social</h6>
              </div>
              <ul className="p-0 m-0 social-text">
                <li className="mb-[15px] text-[13px] uppercase tracking-[1px]">
                  <a className="inline-block" href="#0">
                    Facebook
                  </a>
                </li>
                <li className="mb-[15px] text-[13px] uppercase tracking-[1px]">
                  <a className="inline-block" href="#0">
                    Twitter
                  </a>
                </li>
                <li className="mb-[15px] text-[13px] uppercase tracking-[1px]">
                  <a className="inline-block" href="#0">
                    LinkedIn
                  </a>
                </li>
                <li className="mb-[15px] text-[13px] uppercase tracking-[1px]">
                  <a className="inline-block" href="#0">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-[25%] px-[15px]">
              <div className="mb-[20px]">
                <h6 className="text-[20px] font-[500]">Newsletter</h6>
              </div>
              <div className="subscribe">
                <form action="contact.php">
                  <div className="relative p-0 m-0">
                    <input
                      type="email"
                      placeholder="Type Your Email"
                      className="text-white bg-transparent border-b border-b-white/[0.1] w-full py-[15px] pr-[30px] pl-0"
                    />
                    <button
                      type="submit"
                      className="text-white py-15 px-0 absolute top-0 bottom-0 right-0 bg-transparent border-none">
                      <ArrowRightShort size={24} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[40px] border-t border-t-white/[0.05] relative z-[7]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between">
              <div className="col-lg-4">
                <div className="logo">
                  <a href="#">
                    {/* <img src="assets/imgs/logo-light.png" alt="" /> */}
                    FivMedia
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="copyright d-flex">
                  <div className="ml-auto">
                    <p className="fz-13">© 2023 FivMedia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
