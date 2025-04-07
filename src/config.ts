export const SITE = {
  website: "https://ajitabhkalta.com/", // replace this with your deployed domain
  author: "Ajitabh Kalta",
  profile: "https://ajitabhkalta.com/",
  desc: "Ajitabh Kalta helps leverage data analytics to optimize their digital marketing efforts. Learn about social media, advertising, email marketing, branding, and more – all powered by data.",
  title: "Ajitabh Kalta",
  ogImage: "ajitabhkalta-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/ajitabhkalta/blog/edit/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Calcutta", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
