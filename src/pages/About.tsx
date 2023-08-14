import Marquee from 'react-fast-marquee';

const About = () => {
  return (
    <div className="bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4">
        <header className="min-h-[60vh] relative overflow-hidden py-32">
          <div className="lg:mt-20">
            <div>
              <div>
                <h6 className="relative pl-5 text-sm font-light uppercase tracking-[2px]">· Who We are</h6>
                <h1 className="lg:text-[55px] text-[32px] font-semibold">
                  We're a digital agency based <br /> in Valencia.
                </h1>
              </div>

              <div className="lg:w-[40%] mx-auto mt-10">
                <div className="text">
                  <p className="text-base font-light text-gray-300 m-0 leading-[1.8rem]">
                    We help our clients succeed by creating brand identities, digital experiences, and print materials
                    that communicate clearly, achieve marketing goals, and look fantastic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* 2nd */}
      <div className="uppercase pb-0 lg:py-[120px] relative">
        <div className="relative flex">
          <Marquee>
            <div className="relative flex">
              <div className="px-[30px]">
                <h4 className="text-[10vw] font-extrabold whitespace-nowrap m-0">About Us</h4>
              </div>
              <div className="px-[30px]">
                <h4 className="text-[10vw] font-extrabold whitespace-nowrap m-0 stroke">About Us</h4>
              </div>
              <div className="px-[30px]">
                <h4 className="text-[10vw] font-extrabold whitespace-nowrap m-0">About Us</h4>
              </div>
              <div className="px-[30px]">
                <h4 className="text-[10vw] font-extrabold whitespace-nowrap m-0 stroke">About Us</h4>
              </div>
              <div className="px-[30px]">
                <h4 className="text-[10vw] font-extrabold whitespace-nowrap m-0">About Us</h4>
              </div>
            </div>
          </Marquee>
        </div>
      </div>

      {/* 3rd */}
      <section className="py-[120px] bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6">
            <div className="flex-auto w-[100%] lg:w-[33.3%] px-[15px]">
              <div
                className="h-[400px] bg-cover bg-center bg-[url('assets/sq1.jpeg')] bg-no-repeat rounded-[10px]"
                data-background="assets/imgs/about/sq1.jpg"></div>
            </div>
            <div className="flex-auto w-[100%] lg:w-[66.6%] px-[15px]">
              <div
                className="h-[400px] bg-cover bg-center bg-[url('assets/sq2.jpeg')] bg-no-repeat rounded-[10px]"
                data-background="assets/imgs/about/sq2.jpg"></div>
            </div>
            <div className="flex-auto w-[33.3%] px-[15px]">
              <div className="mt-[80px]">
                <h6 className="text-sm font-light uppercase tracking-widest">Our Story.</h6>
              </div>
            </div>
            <div className="flex-auto lg:w-[66.6%] w-[100%] px-[15px]">
              <div className="lg:mt-[80px] ">
                <h4 className="lg:text-[28px] text-[18px] font-semibold leading-10">
                  GeekFolio are digital marketing experts and can partner with you to implement tactical campaigns which
                  engage and connect audiences whilst driving ROI for your brand. We are SEO and SEM professionals and
                  have implemented successful search campaigns for clients which drive super-charge improvements in
                  organic rankings, increase visits and grow revenue.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
