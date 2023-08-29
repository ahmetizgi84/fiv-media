import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4">
        <header className="min-h-[60vh] relative overflow-hidden py-32">
          <div className="lg:mt-20">
            <div>
              <div>
                <h6 className="relative pl-5 text-sm font-light uppercase tracking-[2px]"> {t('servicesTitle')}</h6>
                <h1 className="lg:text-[55px] text-[32px] font-semibold">
                  {t('servicesTitle2')} <br /> {t('servicesTitle3')}
                </h1>
              </div>

              <div className="lg:w-[40%] mx-auto mt-10">
                <div className="text">
                  <p className="text-base font-light text-gray-300 m-0 leading-[1.8rem]">
                    {t('servicesComment')}
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
                <h4 className="text-[10vw] font-extrabold whitespace-nowrap m-0">{t('servicesShow')}</h4>
              </div>
              <div className="px-[30px]">
                <h4 className="text-[10vw] font-extrabold whitespace-nowrap m-0 stroke">{t('servicesShow')}</h4>
              </div>
              <div className="px-[30px]">
                <h4 className="text-[10vw] font-extrabold whitespace-nowrap m-0">{t('servicesShow')}</h4>
              </div>
              <div className="px-[30px]">
                <h4 className="text-[10vw] font-extrabold whitespace-nowrap m-0 stroke">{t('servicesShow')}</h4>
              </div>
              <div className="px-[30px]">
                <h4 className="text-[10vw] font-extrabold whitespace-nowrap m-0">{t('servicesShow')}</h4>
              </div>
            </div>
          </Marquee>
        </div>
      </div>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="md:flex pt-[120px] mb-[80px]">
          <div className="flex-1">
            <h6 className="py-2 px-14 text-xs uppercase tracking-[1px] rounded-3xl border inline-block border-gray-400 mb-4">
              {t('servicesLTittle')}
            </h6>
            <h2 className="md:text-5xl text-[28px] font-semibold">{t('ourservicesTitle')}</h2>
          </div>

          <div className="basis-1/3 mx-auto">
            <p className="text-base font-light text-gray-300">
              ....
            </p>

            <button className="px-5 py-2 rounded-md mt-5 transition duration-300 ease-in-out border inline-block border-gray-400 hover:bg-white hover:text-zinc-800">
              <Link to="#">{t('newsButton')}</Link>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3  gap-9 justify-center items-center items-stretch min-w-max  max-sm:grid-cols-1 " >
        {/* CARD 1 */}
        <div className="flex-1 items-start border border-white/[0.1] md:p-14 p-8   ">
          <div className="w-12 mb-10">
            <img src="/images/0.png" alt="" className="w-full h-full object-cover align-middle" />
          </div>

          
          <h6 className="mb-4 mt-3 text-xl font-medium">{t('card1')}</h6>
          <p className="text-sm font-light text-gray-300 m-0 max-w-xs  ">
            {t('UxComment')}
          </p>

          <div className=''>
            {/* <a
              href="page-services.html"
              className="w-full py-4 pl-8 border border-white/[0.05] rounded-[30px] transition duration-300 ease-in-out relative mt-8 uppercase text-xs tracking-wider inline-block no-underline hover:bg-white hover:text-zinc-800">
              Read More
              <svg
                className="relative -top-0 right-0 w-12 h-12 p-4 border border-white/[0.05] rounded-[50%]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                  fill="currentColor"></path>
              </svg>
            </a> */}
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex-1 border  border-white/[0.1] md:p-12 p-8">
          <div className="w-12 mb-10">
            <img src="/images/1.png" alt="" className="w-full h-full object-cover align-middle" />
          </div>

          
          <h6 className="mb-4 mt-3 text-xl font-medium">{t('card2')}</h6>
          <p className="text-sm font-light text-gray-300 m-0 max-w-xs  ">
            {t('BrandingComment')}

          </p>

          <div className='flex'>
           {/*  <a
              href="page-services.html"
              className="w-full py-4 pl-8 border border-white/[0.05] rounded-[30px] transition duration-300 ease-in-out relative mt-8 uppercase text-xs tracking-wider inline-block no-underline hover:bg-white hover:text-zinc-800">
              Read More
              <svg
                className="relative -top-0 right-0 w-12 h-12 p-4 border border-white/[0.05] rounded-[50%]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                  fill="currentColor"></path>
              </svg>
            </a> */}
          </div>
        </div>

        {/* CARD 3 */}
        <div className="flex-1 border  border-white/[0.1] md:p-14 p-8">
          <div className="w-12 mb-10">
            <img src="/images/2.png" alt="" className="w-full h-full object-cover align-middle" />
          </div>

          
          <h6 className="mb-4 mt-3 text-xl font-medium">{t('card3')}</h6>
          <p className="text-sm font-light text-gray-300 m-0 max-w-xs  ">
          {t('DevelopmentComment')}
          </p>

          <div>
           {/*  <a
              href="page-services.html"
              className="w-full py-4 pl-8 border border-white/[0.05] rounded-[30px] transition duration-300 ease-in-out relative mt-8 uppercase text-xs tracking-wider inline-block no-underline hover:bg-white hover:text-zinc-800">
              Read More
              <svg
                className="relative -top-0 right-0 w-12 h-12 p-4 border border-white/[0.05] rounded-[50%]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                  fill="currentColor"></path>
              </svg>
            </a> */}
          </div>
        </div>

        {/* Kart 4 */}
        <div className="flex-1 border  border-white/[0.1] md:p-14 p-8 ">
          <div className="w-12 mb-10">
            <img src="/images/2.png" alt="" className="w-full h-full object-cover align-middle" />
          </div>

         
          <h6 className="mb-4 mt-3 text-xl font-medium">{t('card4')}</h6>
          <p className="text-sm font-light text-gray-300 m-0 max-w-xs  ">
          {t('MarketingComment')}
          </p>

          <div>
           {/*  <a
              href="page-services.html"
              className="w-full py-4 pl-8 border border-white/[0.05] rounded-[30px] transition duration-300 ease-in-out relative mt-8 uppercase text-xs tracking-wider inline-block no-underline hover:bg-white hover:text-zinc-800  ">
              Read More
              <svg
                className="relative -top-0 right-0 w-12 h-12 p-4 border border-white/[0.05] rounded-[50%]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                  fill="currentColor"></path>
              </svg>
            </a> */}
          </div>
        </div>
        {/* Kart 5 */}
        <div className="flex-1 border  border-white/[0.1] md:p-14 p-8 ">
          <div className="w-12 mb-10">
            <img src="/images/2.png" alt="" className="w-full h-full object-cover align-middle" />
          </div>

          
          <h6 className="mb-4 mt-3 text-xl font-medium">{t('card5')}</h6>
          <p className="text-sm font-light text-gray-300 m-0 max-w-xs ">
          {t('SpecialServicesComment')}
          </p>

          <div>
           {/*  <a
              href="page-services.html"
              className="top-16 w-full py-4 pl-8 border border-white/[0.05] rounded-[30px] transition duration-300 ease-in-out relative mt-8 uppercase text-xs tracking-wider inline-block no-underline hover:bg-white hover:text-zinc-800 max-sm:top-0">
              Read More
              <svg
                className="relative -top-0 right-0 w-12 h-12 p-4 border border-white/[0.05] rounded-[50%]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                  fill="currentColor"></path>
              </svg>
            </a> */}
          </div>
        </div>

      


      </div>


      </section>

      {/* SPECS */}
      <section className="max-w-7xl mx-auto md:flex py-[120px]">
        <div className="basis-1/2 px-4">
          <div className="flex-1 mb-20">
            <h6 className="py-2 px-14 text-xs uppercase tracking-[1px] rounded-3xl border inline-block border-gray-400 mb-4">
              {t('servicesShow')}
            </h6>
            <p className="text-base font-light text-gray-300">
              {t('ServicesLastComment')}
            </p>
          </div>
          {/*  */}

          <ul>
            <li
              className="text-4xl font-medium cursor-pointer pb-5 mb-5 border-b-[1px] border-white/[0.05]"
              data-tab="tabs-1">
              <span className="text-xl mr-8 inline-block">01</span> {t('card1')}
            </li>
            <li
              className="text-4xl font-medium cursor-pointer pb-5 mb-5 border-b-[1px] border-white/[0.05]"
              data-tab="tabs-2">
              <span className="text-xl mr-8 inline-block">02</span> {t('card2')}
            </li>
            <li
              className="text-4xl font-medium cursor-pointer pb-5 mb-5 border-b-[1px] border-white/[0.05]"
              data-tab="tabs-3">
              <span className="text-xl mr-8 inline-block">03</span>{t('card3')}
            </li>
            <li
              className="text-4xl font-medium cursor-pointer pb-5 mb-5 border-b-[1px] border-white/[0.05]"
              data-tab="tabs-4">
              <span className="text-xl mr-8 inline-block">04</span> {t('card4')}
            </li>
          </ul>
        </div>

        <div className="basis-1/2 flex justify-end">
          <div className="md:w-[70%] w-full">
            <img src="/images/4.jpg" alt="fiv-media hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
