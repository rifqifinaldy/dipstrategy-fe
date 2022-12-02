interface IPortfolioItems {
  id: number;
  title: string;
  subtitle: string;
  list: string[];
  images: {
    front_image: string;
    behind_image: string;
  };
}

export const portofolioItems: IPortfolioItems[] = [
  {
    id: 1,
    title: "HANA BANK Website",
    subtitle: "CUSTOM WEB DEVELOPMENT",
    list: [
      "2017 Webby Award Winner for best Shopping App",
      "DSC was reportedly acquired by Unilever for $1 Billion",
      "4.8 Google Play Reviews",
      "97% of app users would recommend the DSC app to a friend",
    ],
    images: {
      front_image: "/images/portfolio/custom-web-app/images-front.png",
      behind_image: "/images/portfolio/custom-web-app/images-behind.png",
    },
  },
  {
    id: 2,
    title: "UTVI PWA",
    subtitle: "CUSTOM APP DEVELOPMENT",
    list: [
      "2021 App Award Winner for Best Maid App",
      "DSC was reportedly acquired by Unilever for $1 Billion",
      "4.8 Google Play Reviews",
      "4.8 App Store Reviews",
      "97% of app users would recommend the DSC app to a friend",
    ],
    images: {
      front_image: "/images/portfolio/custom-app-dev/images-front.png",
      behind_image: "/images/portfolio/custom-app-dev/images-behind.png",
    },
  },
  {
    id: 3,
    title: "BASF WEB DESIGN",
    subtitle: "DESIGN UI/UX",
    list: [
      "2017 Webby Award Winner for Best Shopping App",
      "DSC was reportedly acquired by Unilever for $1 Billion",
      "4.8 Google Play Reviews",
      "97% of app users would recommend the DSC app to a friend",
    ],
    images: {
      front_image: "/images/portfolio/design-ui-ux/images-front.png",
      behind_image: "/images/portfolio/design-ui-ux/images-behind.png",
    },
  },
  {
    id: 4,
    title: "Open Fashion Mobile App",
    subtitle: "E-COMMERCE DEVELOPMENT",
    list: [
      "2017 Webby Award Winner for Best Shopping App",
      "DSC was reportedly acquired by Unilever for $1 Billion",
      "4.8 Google Play Reviews",
      "4.8 App Store Reviews",
      "97% of app users would recommend the DSC app to a friend",
    ],
    images: {
      front_image: "/images/portfolio/e-commerce-dev/images-front.jpg",
      behind_image: "/images/portfolio/e-commerce-dev/images-behind.jpg",
    },
  },
];
