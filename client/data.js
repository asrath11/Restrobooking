import SliderImage1 from './src/assets/slider-1.png';
import SliderImage2 from './src/assets/slider-2.png';
import SliderImage3 from './src/assets/slider-3.png';

import AboutUsImage from './src/assets/about-image.jpg';

export const ABOUT_CONTENT = {
  title: 'About Us',
  header: {
    title: 'Elevate Your Entertainment',
    content: [
      'Welcome to our Private Party Theater, where every celebration becomes an unforgettable experience. Nestled in the heart of Hyderabad City, our theater offers a unique venue for birthdays, anniversaries, bachelorette parties, bridal showers, and any other special occasion you wish to celebrate in style.',
      'At Flix and Fun, we believe that the perfect celebration goes beyond just a great venue. We offer a range of additional services to enhance your experience, including delicious food, cakes, flowers, stunning decorations, and personalized gifts.',
    ],
    image: AboutUsImage,
  },
  sections: [
    {
      title: 'Why Choose Our Private Party Theater?',
      items: [
        {
          title: 'Private Theaters in Hyderabad',
          content:
            "Step into our private theater that is exclusively yours for the duration of your event. It's perfect for intimate gathering or larger parties.",
        },
        {
          title: 'Customized Decor',
          content:
            'From elegant to whimsical, our team of decorators transforms the space according to your theme and preferences. Whether you envision a romantic ambiance for an anniversary or a vibrant setup for a birthday bash, we make your vision a reality.',
        },
        {
          title: 'State-of-the-Art Audiovisuals',
          content:
            'Enjoy a cinematic experience with our high-definition projection system and surround sound. Play slideshows, videos, or movies that capture precious moments and add a personal touch to your celebration.',
        },
        {
          title: 'Gourmet Catering',
          content:
            "Indulge in a delectable feast with our gourmet catering options. From hors d'oeuvres to full-course meals, our culinary experts curate a menu that delights your palate and impresses your guests.",
        },
        {
          title: 'Dedicated Service',
          content:
            'Our professional staff ensures that every detail is taken care of, allowing you to relax and enjoy your party to the fullest. From setup to cleanup, we handle everything with precision and care.',
        },
        {
          title: 'Flexible Packages',
          content:
            'Choose from our range of packages tailored to suit your needs and budget. Whether you prefer a basic setup with essential services or a lavish affair with all the bells and whistles, we have options that cater to every requirement.',
        },
        {
          title: 'Special Occasions',
          content:
            'Celebrate milestones such as birthdays, anniversaries, and bridal showers with themed decorations and personalized touches. Host memorable bachelorette parties with games, mocktails, and entertainment that keep the fun going all day long.',
        },
      ],
    },
  ],
};
export const SLIDE_CONTENT = [
  {
    title: 'Book a Private Movie Screening',
    description:
      'Host a Private Movie Screening at Our Luxurious Theater. Perfect for Birthdays, Anniversaries, or Corporate Events. Book Now!',
    image: SliderImage1,
  },
  {
    title: 'Top Private Movie Theater for Couples',
    description:
      'Reserve the Top private movie theater for romantic Couples Experiences',
    image: SliderImage2,
  },
  {
    title: 'Best Private Threater in Hyderabad',
    description:
      "Choose Hyderabad's affordable luxury private theater for unforgettable event Experiences.",
    image: SliderImage3,
  },
];
export const LOCATIONS_TIME_SLOTS = {
  elysium: [
    '9:30 AM - 12:30 PM',
    '1:30 PM - 4:00 PM',
    '4:30 PM - 6:00 PM',
    '6:30 PM - 9:30 PM',
    '10:00 PM - 1:00 AM',
  ],
  solitarium: [
    '9:30 AM - 11:30 PM',
    '12:00 PM - 2:30 PM',
    '3:00 PM - 5:00 PM',
    '5:30 PM - 7:30 PM',
    '8:00 PM - 10:30 PM',
    '11:00 PM - 1:00 AM',
  ],
  photobooths: [
    '9:30 AM - 10:30 PM',
    '11:00 PM - 12:00 PM',
    '12:30 PM - 1:30 PM',
    '2:00 PM - 3:00 PM',
    '3:30 PM - 4:30 PM',
    '5:00 PM - 6:00 PM',
    '8:00 PM - 9:00 PM',
    '9:30 PM - 10:30 PM',
    '11:00 PM - 12:00 AM',
  ],
  gamersrealm: [
    '9:30 AM - 10:30 PM',
    '11:00 PM - 12:00 PM',
    '12:30 PM - 1:30 PM',
    '2:00 PM - 3:00 PM',
    '3:30 PM - 4:30 PM',
    '5:00 PM - 6:00 PM',
    '8:00 PM - 9:00 PM',
    '9:30 PM - 10:30 PM',
    '11:00 PM - 12:00 AM',
  ],
};

export const FEATURES = [
  'Birthdays',
  'Anniversaries',
  'Corporate Events',
  'Gaming Sessions',
  'Movie Marathons',
];

export const FOOTER_CONTENT = {
  mainLinks: [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Gallery', url: '/gallery' },
    { label: 'Add-ONS', url: '/add-ons' },
    { label: 'Gifts', url: '/gifts' },
  ],

  legalLinks: [
    { label: 'Refund Policy', url: '/refund-policy' },
    { label: 'Privacy Policy', url: '/privacy-policy' },
    { label: 'Terms And Conditions', url: '/terms' },
    { label: 'Pricing', url: '/pricing' },
  ],

  contactInfo: [
    {
      type: 'address',
      value:
        'FlixandFun, Jaihind Gandhi Road, VIP Hills, Jaihind Enclave, Madhapur, Hitech City, Hyderabad',
    },
    { type: 'phone', value: '+91 9666002006' },
    { type: 'email', value: 'info@flixandfun.com' },
  ],

  actionLinks: [{ label: 'Contact Us', url: '/contact', isButton: true }],
};
