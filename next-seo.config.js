let config = {
    title:"Iftarkar",
    description:"Iftarkar is your companion app for 2021's Ramzan. Daily Countdown Timer, Iftar and Sehri Timings for Jammu, Kashmir, Kargil and Ladakh.",
    url:"https://iftarkar.com",
}
export default {
    title:config.title,
    description:config.description,
    canonical:config.url,
    openGraph: {
      url:  config.url,
      title: config.title,
      description: config.description,
      type: 'website',
      url: config.url,
      site_name: config.title,
      images: [
        {
          url: config.url+'/og_image.png',
          width: 1200,
          height: 675,
          alt: 'OG Image'
      },
      ]
    },
  };
