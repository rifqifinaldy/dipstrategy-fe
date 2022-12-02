interface ITeams {
  id: number;
  avatar: string;
  name: string;
  position: string;
  linkedln_url: string;
  facebook_url: string;
  twitter_url: string;
}

export const teamItems: ITeams[] = [
  {
    id: 1,
    avatar: "/images/avatar/sam-flex.png",
    name: "SAM FLEX",
    position: "Director",
    linkedln_url: "https://www.linkedin.com/home",
    facebook_url: "https://www.facebook.com/",
    twitter_url: "https://twitter.com/i/flow/login",
  },
  {
    id: 2,
    avatar: "/images/avatar/kate-larsson.png",
    name: "KATE LARSON",
    position: "Manager",
    linkedln_url: "https://www.linkedin.com/home",
    facebook_url: "https://www.facebook.com/",
    twitter_url: "https://twitter.com/i/flow/login",
  },
  {
    id: 3,
    avatar: "/images/avatar/bobby-fish.png",
    name: "BOBBY FISH",
    position: "Designer",
    linkedln_url: "https://www.linkedin.com/home",
    facebook_url: "https://www.facebook.com/",
    twitter_url: "https://twitter.com/i/flow/login",
  },
  {
    id: 4,
    avatar: "/images/avatar/amanda-james.png",
    name: "AMANDA JAMES",
    position: "PROGRAMMER",
    linkedln_url: "https://www.linkedin.com/home",
    facebook_url: "https://www.facebook.com/",
    twitter_url: "https://twitter.com/i/flow/login",
  },
];
