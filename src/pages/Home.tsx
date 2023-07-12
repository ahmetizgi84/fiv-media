import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import MainLayout from '@/layouts/MainLayout';
import { StarFill } from 'react-bootstrap-icons';
import { firstSettings, secondSettings, solutions, testimonials } from '@/constants';

const Home = () => {
  return (
    <MainLayout>
      <Hero />

      <Benefits />

      <Revenue />

      <MarqueText />

      <OurServices />

      <Works />

      <Services />

      <PeopleSay />
    </MainLayout>
  );
};

export default Home;

function Hero() {
  return (
    <section className="relative pt-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-8xl font-bold tracking-[2px] leading-[7rem]">
          HIGH END <br /> <span className="stroke">CREATIVE</span> AGENCY
        </h1>
      </div>

      <div className="flex px-4 justify-end mt-6">
        <div className="max-w-sm">
          <p className="text-base font-light text-gray-300">
            Through our years of experience, we've also learned that while each channel has its own set of advantages.
          </p>
        </div>

        <div className="h-[400px] w-[60%] ">
          <img src="/images/14.jpg" alt="fiv-media hero" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="absolute left-0 top-0 w-full h-full bg-[url('assets/graph.png')] bg-cover bg-no-repeat" />
    </section>
  );
}

function Benefits() {
  return (
    <section className="max-w-7xl mx-auto px-4 flex pt-[120px]">
      <div className="basis-1/2">
        <h6 className="py-2 px-14 text-xs uppercase tracking-[1px] rounded-3xl border inline-block border-gray-400 mb-4">
          our benefits
        </h6>
        <h2 className="text-5xl font-semibold">Our Team of Dedicated Digital Professionals.</h2>
      </div>

      <div className="basis-1/3 mx-auto">
        <p className="text-base font-light text-gray-300">
          Through our years of experience, we’ve also learned that while each channel has its own set of advantages,
          they all work best when strategically paired with other channels.
        </p>

        <button className="px-5 py-2 rounded-md mt-5 transition duration-300 ease-in-out hover:bg-white hover:text-zinc-800 border inline-block border-gray-400">
          <Link to="#">View All Our News</Link>
        </button>
      </div>
    </section>
  );
}

function Revenue() {
  return (
    <section className="max-w-7xl mx-auto px-4 flex py-[120px]">
      <div className="basis-1/2 mx-auto">
        <div className="w-[70%]">
          <img src="/images/01.jpg" alt="fiv-media hero" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="basis-1/2">
        <h2 className="text-5xl font-semibold">Unlock Revenue Growth for Your Business.</h2>

        <div className="flex items-center mt-20">
          <div className="w-[70px]">
            <img src="/images/0.png" alt="fiv-media hero" className="w-full h-full object-cover" />
          </div>

          <div className="ml-8">
            <h6 className="text-xl font-medium mb-4">High Standart</h6>
            <p className="text-base font-light text-gray-300">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex items-center mt-20">
          <div className="w-[70px]">
            <img src="/images/1.png" alt="fiv-media hero" className="w-full h-full object-cover" />
          </div>

          <div className="ml-8">
            <h6 className="text-xl font-medium mb-4">Ease of Communication</h6>
            <p className="text-base font-light text-gray-300">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueText() {
  return (
    <section>
      <div className="border border-white/[0.1] -rotate-3 py-[50px] w-[110%] -ml-5 bg-[#1d1d1d]">
        <Marquee>
          {solutions.map(solution => (
            <div className="px-8" key={solution}>
              <h4 className="flex items-center text-7xl font-semibold">
                <span>{solution}</span>
                <span className="ml-[50px] text-5xl">*</span>
              </h4>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="border border-white/[0.1] py-[70px] w-[110%] -ml-5">
        <div className="max-w-7xl mx-auto px-4 flex justify-evenly">
          <h2>HUQS</h2>
          <h2>WASP</h2>
          <h2>TRIDOS</h2>
          <h2>TRUFFLE</h2>
          <h2>GNOSIS</h2>
        </div>
      </div>
    </section>
  );
}

function OurServices() {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex pt-[120px] mb-[80px]">
        <div className="flex-1">
          <h6 className="py-2 px-14 text-xs uppercase tracking-[1px] rounded-3xl border inline-block border-gray-400 mb-4">
            featured services
          </h6>
          <h2 className="text-5xl font-semibold">Our Services.</h2>
        </div>

        <div className="basis-1/3 mx-auto">
          <p className="text-base font-light text-gray-300">
            Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.
          </p>

          <button className="px-5 py-2 rounded-md mt-5 transition duration-300 ease-in-out border inline-block border-gray-400 hover:bg-white hover:text-zinc-800">
            <Link to="#">View All Our News</Link>
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* CARD 1 */}
        <div className="flex-1 border border-white/[0.1] p-14">
          <div className="w-12 mb-10">
            <img src="/images/0.png" alt="" className="w-full h-full object-cover align-middle" />
          </div>

          <span className="opacity-70">Product Design</span>
          <h6 className="mb-4 mt-3 text-xl font-medium">Digital Product Design</h6>
          <p className="text-sm font-light text-gray-300 m-0">
            Creating a higher spacing and how people move through a unique.
          </p>

          <div>
            <a
              href="page-services.html"
              className="w-full py-4 pl-8 border border-white/[0.05] rounded-[30px] transition duration-300 ease-in-out relative mt-8 uppercase text-xs tracking-wider inline-block no-underline hover:bg-white hover:text-zinc-800">
              Read More
              <svg
                className="absolute -top-0 right-0 w-12 h-12 p-4 border border-white/[0.05] rounded-[50%]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                  fill="currentColor"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex-1 border  border-white/[0.1] p-14">
          <div className="w-12 mb-10">
            <img src="/images/1.png" alt="" className="w-full h-full object-cover align-middle" />
          </div>

          <span className="opacity-70">Custom Services</span>
          <h6 className="mb-4 mt-3 text-xl font-medium">Branding & Design</h6>
          <p className="text-sm font-light text-gray-300 m-0">
            Creating a higher spacing and how people move through a unique.
          </p>

          <div>
            <a
              href="page-services.html"
              className="w-full py-4 pl-8 border border-white/[0.05] rounded-[30px] transition duration-300 ease-in-out relative mt-8 uppercase text-xs tracking-wider inline-block no-underline hover:bg-white hover:text-zinc-800">
              Read More
              <svg
                className="absolute -top-0 right-0 w-12 h-12 p-4 border border-white/[0.05] rounded-[50%]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                  fill="currentColor"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="flex-1 border  border-white/[0.1] p-14">
          <div className="w-12 mb-10">
            <img src="/images/2.png" alt="" className="w-full h-full object-cover align-middle" />
          </div>

          <span className="opacity-70">Web Development</span>
          <h6 className="mb-4 mt-3 text-xl font-medium">Digital Product Design</h6>
          <p className="text-sm font-light text-gray-300 m-0">
            Creating a higher spacing and how people move through a unique.
          </p>

          <div>
            <a
              href="page-services.html"
              className="w-full py-4 pl-8 border border-white/[0.05] rounded-[30px] transition duration-300 ease-in-out relative mt-8 uppercase text-xs tracking-wider inline-block no-underline hover:bg-white hover:text-zinc-800">
              Read More
              <svg
                className="absolute -top-0 right-0 w-12 h-12 p-4 border border-white/[0.05] rounded-[50%]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                  fill="currentColor"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section className="pt-[120px]">
      <Slider {...firstSettings}>
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </Slider>
    </section>
  );
}

function SimpleCard() {
  return (
    <div className="mt-8 flex h-full flex-1 justify-end items-center mr-20">
      <div className="w-[42vw] relative">
        <div className="">
          <img src="images/02.jpg" alt="" className="w-full h-auto align-middle" />
        </div>
        <div className="flex items-end mt-8">
          <div>
            <span className="text-sm font-medium uppercase tracking-wider opacity-75 inline-block">Web Design</span>
            <h5 className="font-semibold mb-1 text-2xl">Mobile Software</h5>
          </div>
          <div className="ml-auto">
            <h6 className="text-xl font-medium">2023</h6>
          </div>
        </div>
        <a href="#0" className="absolute top-0 left-0 w-full h-full inline-block"></a>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 flex py-[120px]">
      <div className="basis-1/2">
        <div className="flex-1 mb-20">
          <h6 className="py-2 px-14 text-xs uppercase tracking-[1px] rounded-3xl border inline-block border-gray-400 mb-4">
            services
          </h6>
          <p className="text-base font-light text-gray-300">
            We help you to go online and increase your conversion rate Better design for your digital products.
          </p>
        </div>
        {/*  */}

        <ul>
          <li
            className="text-4xl font-medium cursor-pointer pb-5 mb-5 border-b-[1px] border-white/[0.05]"
            data-tab="tabs-1">
            <span className="text-xl mr-8 inline-block">01</span> UI/UX Design
          </li>
          <li
            className="text-4xl font-medium cursor-pointer pb-5 mb-5 border-b-[1px] border-white/[0.05]"
            data-tab="tabs-2">
            <span className="text-xl mr-8 inline-block">02</span> Branding
          </li>
          <li
            className="text-4xl font-medium cursor-pointer pb-5 mb-5 border-b-[1px] border-white/[0.05]"
            data-tab="tabs-3">
            <span className="text-xl mr-8 inline-block">03</span> Development
          </li>
          <li
            className="text-4xl font-medium cursor-pointer pb-5 mb-5 border-b-[1px] border-white/[0.05]"
            data-tab="tabs-4">
            <span className="text-xl mr-8 inline-block">04</span> Marketing
          </li>
        </ul>
      </div>

      <div className="basis-1/2 flex justify-end">
        <div className="w-[70%]">
          <img src="/images/4.jpg" alt="fiv-media hero" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function PeopleSay() {
  return (
    <section className="py-[120px] flex mx-auto bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h6 className="py-2 px-14 text-xs uppercase tracking-[1px] rounded-3xl border inline-block border-gray-400 mb-4">
            testimonials
          </h6>
          <h2 className="text-5xl font-semibold">What People Says?</h2>
        </div>

        {/*  */}
        <div className="flex items-center gap-6">
          <div className="relative flex-[0.5]">
            <div className="border border-white/[0.5] w-80 h-80 rounded-full overflow-hidden items-center justify-center flex">
              <div className="w-36 h-36 rounded-full p-10 relative z-10 bg-[#1d1d1d]">
                <img src="/images/quote.png" alt="" className="w-full h-auto align-middle" />
              </div>
            </div>
            <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full overflow-hidden">
              <img src="/images/sq1.jpg" alt="" className="w-full h-full object-cover object-center align-middle" />
            </div>
          </div>

          {/* ITEM */}
          <div className="flex-[0.5] max-w-[50%]">
            <Slider {...secondSettings}>
              {testimonials.map(test => (
                <TestimonialCard key={test.id} test={test} />
              ))}
            </Slider>
          </div>
        </div>

        {/*  */}
        <div className="pt-20 mt-80 border-t-[1px] border-t-white/[0.05]">
          <div className="flex flex-wrap">
            <div className="flex-[25%]">
              <div>
                <h2 className="text-9xl font-extrabold text-transparent stroke">16</h2>
                <h6 className="text-base font-medium">Years of Experience</h6>
              </div>
            </div>

            <div className="flex-[25%] flex justify-around">
              <div>
                <h2 className="text-9xl font-extrabold">
                  4<span className="fz-80 fw-600">k</span>
                </h2>
                <h6 className="text-base font-medium">Projects Complated</h6>
              </div>
            </div>

            <div className="flex-[25%] flex justify-around">
              <div>
                <h2 className="text-9xl font-extrabold text-transparent stroke">
                  9<span className="text-8xl font-semibold inline-block">k</span>
                </h2>
                <h6 className="text-base font-medium">Happy Customers</h6>
              </div>
            </div>

            <div className="flex-[25%] flex">
              <div className="ml-auto">
                <h2 className="text-9xl font-extrabold">12</h2>
                <h6 className="text-base font-medium">Awards Winning</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ test }: { test: any }) {
  return (
    <div>
      <div className="mb-10">
        <div className="mb-5 text-base">
          <span className="flex gap-1">
            <StarFill color="#ffaa17" />
            <StarFill color="#ffaa17" />
            <StarFill color="#ffaa17" />
            <StarFill color="#ffaa17" />
            <StarFill color="#ffaa17" />
          </span>
        </div>
        <h5 className="font-normal text-2xl">{test.desc}</h5>
      </div>
      <div className="flex items-center">
        <div>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={test.img} alt="" className="w-full h-full object-cover object-center align-middle" />
          </div>
        </div>
        <div className="ml-8">
          <div className="info">
            <h6 className="text-base font-medium">{test.name}</h6>
            <span className="text-sm font-light uppercase tracking-widest opacity-70 inline-block">{test.pos}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
