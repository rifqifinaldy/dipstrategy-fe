interface IMenus {
  id: number;
  name: string;
  link: string;
  children?: IMenus[];
}

export const menus: IMenus[] = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "SERVICES",
    link: "/services",
  },
  {
    id: 3,
    name: "WORK FLOW",
    link: "/work-flow",
  },
  {
    id: 4,
    name: "PORTFOLIO",
    link: "/portfolio",
  },
  {
    id: 5,
    name: "ABOUT US",
    link: "/about",
  },
  {
    id: 6,
    name: "OUR VALUE",
    link: "/our-value",
  },
];
