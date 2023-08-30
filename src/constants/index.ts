

export const firstSettings = {
  infinite: true,
  speed: 3500,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  pauseOnHover: true,
  centerMode: false,
  responsive: [
    // {
    //   breakpoint: 1400,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     centerMode: true
    //   }
    // },
    // {
    //   breakpoint: 991,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     centerMode: true
    //   }
    // },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};

export const secondSettings = {
  infinite: true,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  pauseOnHover: true,
  centerMode: false
};

export const solutions = [
  'Websites/Logos/App Development',
  'Short Advertisement Movies',
  'Video Cutting',
  'Animations',
  'SMM',
  'Content Creation',
  'Seo/Ads',
  'Fair Stand Organizations'
];

export const testimonials = [
  {
    id: 1,
    name: 'Leonard Heiser',
    pos: 'CEO',
    desc:  'testimonial1',
    img: '/images/1.jpg'
  },
  {
    id: 2,
    name: 'Chris Chong',
    pos: 'CEO',
    desc: 'testimonial2',
    img: '/images/2.jpg'
  }
];

