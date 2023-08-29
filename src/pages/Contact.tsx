import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 ">
          <header className="min-h-[60vh] relative overflow-hidden py-32">
            <div className="mt-20">
              <div className="flex flex-wrap">
                <div className="flex-auto lg:w-[58.3%]">
                  <div className="caption">
                    <h6 className="relative pl-5 text-sm font-light uppercase tracking-[2px]">{t('contactTitle')}</h6>
                    <h1 className="lg:text-[55px] text-[32px] font-semibold">
                      {t('contactTitle2')} <br /> {t('contactTitle3')}
                    </h1>
                  </div>
                </div>
                <div className="flex-auto w-[41.6%] flex items-center">
                  <div className="text">
                    <p className="text-base font-light text-gray-300 m-0 leading-[1.8rem]">
                      {/* We help our clients succeed by creating brand identities, digital experiences, and print materials
                      that communicate clearly, achieve marketing goals, and look fantastic. */}
                      {t('contactInfo')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* REST */}

      <section className="relative overflow-hidden py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="flex-auto lg:w-[41.66%]">
              <div className="sec-lg-head mb-20">
                <h6 className="py-[7px] px-[30px] uppercase text-xs rounded-[30px] border-gray-400 border inline-block mb-[10px]">
                  {t('contactTitle4')}
                </h6>
                <h2 className="lg:text-[50px] text-[35px] font-semibold">
                  Let's get in <br /> touch with us.
                </h2>
                <p className="text-[15px] mt-[10px]">
                  If you would like to work with us or just want to get in touch, we’d love to hear from you!
                </p>
                <div className="mt-[30px] text-[30px] font-semibold phone underline">
                  <a href="#0" className="underline inline-block">
                    +1 840 841 25 69
                  </a>
                </div>
                <ul className="m-0 p-0 flex social-text d-flex mt-[60px] lg:text-base text-sm">
                  <li className="mr-[30px]">
                    <a href="#0" className="inline-block">
                      Facebook
                    </a>
                  </li>
                  <li className="mr-[30px]">
                    <a href="#0" className="inline-block">
                      Twitter
                    </a>
                  </li>
                  <li className="mr-[30px]">
                    <a href="#0" className="inline-block">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="inline-block">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-[50%] lg:ml-[8.33%] flex items-center">
              <div className="w-full">
                <form id="contact-form" method="post" action="contact.php" noValidate>
                  <div className="messages"></div>

                  <div className="controls flex flex-wrap">
                    <div className="flex-auto lg:w-[50%] lg:pr-3">
                      <div className="form-group mb-[30px]">
                        <input
                          className="w-full border border-white/20 rounded-[10px] bg-transparent text-white p-4 transition-all"
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex-auto lg:w-[50%] lg:pl-3">
                      <div className="form-group mb-[30px]">
                        <input
                          className="w-full border border-white/20 rounded-[10px] bg-transparent text-white p-4 transition-all"
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex-auto w-full">
                      <div className="form-group mb-[30px]">
                        <input
                          className="w-full border border-white/20 rounded-[10px] bg-transparent text-white p-4 transition-all"
                          id="form_subject"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>

                    <div className="flex-auto w-full">
                      <div className="form-group">
                        <textarea
                          className="w-full border border-white/20 rounded-[10px] bg-transparent text-white p-4 transition-all"
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows={4}
                          required></textarea>
                      </div>
                      <div className="mt-[30px]">
                        <button
                          type="submit"
                          className="border border-white bg-transparent text-white py-[14px] px-[35px] cursor-pointer rounded-[30px] butn butn-md butn-bord radius-30 disabled">
                          <span className="text">Let's Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
