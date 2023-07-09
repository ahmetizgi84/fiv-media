import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <Hero />

      <Benefits />

      <Revenue />

      <MarqueText />
    </MainLayout>
  );
};

export default Home;

function Hero() {
  return (
    <div className="relative pt-32">
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

      <div className="absolute left-0 top-0 w-full h-full bg-[url('src/assets/graph.png')] bg-cover bg-no-repeat" />
    </div>
  );
}

function Benefits() {
  return (
    <div className="max-w-7xl mx-auto px-4 flex pt-[120px]">
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

        <button className="px-5 py-2 rounded-md mt-5 transition ease-in-out delay-150 border inline-block border-gray-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <Link to="#">View All Our News</Link>
        </button>
      </div>
    </div>
  );
}

function Revenue() {
  return (
    <div className="max-w-7xl mx-auto px-4 flex py-[120px]">
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
    </div>
  );
}

function MarqueText() {
  return (
    <div>
      <div className="border border-gray-500 -rotate-3 py-[50px] w-[110%] -ml-5 bg-[#1d1d1d]">
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

      <div className="border border-gray-500 py-[70px] w-[110%] -ml-5">
        <div className="max-w-7xl mx-auto px-4 flex justify-evenly">
          <h2>HUQS</h2>
          <h2>WASP</h2>
          <h2>TRIDOS</h2>
          <h2>TRUFFLE</h2>
          <h2>GNOSIS</h2>
        </div>
      </div>
    </div>
  );
}

const solutions = ['Mobile Solutions', 'UI-UX Experience', 'Web Development', 'Digital Marketing', 'Product Design'];
