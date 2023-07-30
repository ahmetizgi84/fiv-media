const Footer = () => {
  return (
    <footer className="relative">
      <div className="footer-container">
        <div className="py-[40px] border-t px-4 border-t-white/[0.05] relative z-[7]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between">
              <div className="col-lg-4">
                <div className="logo">
                  <a href="#">FivMedia</a>
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
