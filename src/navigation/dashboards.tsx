import { Health, Setting, Grid5 } from 'iconsax-react';


const main = [
  {
    header: "header",
  },
  {
    id: "dashboards-analytics",
    title: "analytics",
    icon: <Health size={18} />,
    navLink: "/main/dashboard/analytics",
  },
  {
    id: "dashboards-ecommerce",
    title: "ecommerce",
    icon: <Setting size={18} />,
    navLink: "/main/dashboard/ecommerce",
  },
  {
    id: "dashboards-nft",
    title: "NFT",
    icon: <Grid5 size={18} />,
    navLink: "/main/dashboard/nft",
  },
];

export default main