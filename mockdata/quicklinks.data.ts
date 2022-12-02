interface IQuickLinks {
  id: number;
  href: string;
  tag: string;
}

export const quickLinksItems: IQuickLinks[] = [
  {
    id: 1,
    href: "#services",
    tag: "SERVICES",
  },
  {
    id: 2,
    href: "#workflow",
    tag: "WORK FLOW",
  },
  {
    id: 3,
    href: "#portfolio",
    tag: "PORTFOLIO",
  },
  {
    id: 4,
    href: "#about-us",
    tag: "ABOUT US",
  },
  {
    id: 5,
    href: "#our-values",
    tag: "OUR VALUE",
  },
];
