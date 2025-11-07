/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/ongoing',
        destination: '/projects/ongoing',
        permanent: true,
      },
      {
        source: '/ongoing/chartered-woodpecker',
        destination: '/projects/completed',
        permanent: true,
      },
      {
        source: '/ongoing/apartments-in-bangalore-hummingbird',
        destination: '/projects/completed',
        permanent: true,
      },
      {
        source: '/bangalore/apartments-on-kanakapura-road',
        destination: '/projects/completed',
        permanent: true,
      },
      {
        source: '/bangalore/luxury-villas-in-electronic-city',
        destination: '/projects/completed',
        permanent: true,
      },
      {
        source: '/bangalore/plots-in-nelamangala',
        destination: '/projects/upcoming',
        permanent: true,
      },
      {
        source: '/completed',
        destination: '/projects/completed',
        permanent: true,
      },
      {
        source: '/media',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sitemap',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
