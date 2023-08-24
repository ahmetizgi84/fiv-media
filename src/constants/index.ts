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
    desc: 'For years I have been working with different Agencies, but never have I encountered this level of professionalism. Easy to work with, Understanding of circumstances and high Quality Products. I am quite happy with ETMedia and will work with them in the future.',
    img: '/images/1.jpg'
  },
  {
    id: 2,
    name: 'Chris Chong',
    pos: 'CEO',
    desc: 'I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.',
    img: '/images/2.jpg'
  }
];
