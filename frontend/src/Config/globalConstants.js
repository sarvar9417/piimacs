import cs from "../assets/images/CS.jpeg";
export const mainMenu = [
  { to: "/sectionroutes", level: "lower", name: "Low level", image: cs },
  { to: "/sectionroutes", level: "igcse", name: "IGCSE level", image: cs },
  {
    to: "/sectionroutes",
    level: "as_and_a",
    name: "AS and A level",
    image: cs,
  },
  { to: "/sectionroutes", level: "quiz", name: "Quizs", image: cs },
];

const lower = [{ to: "/data", name: "Data" }];
const igcse = [{ to: "/network", name: "Network" }];
const as_and_a = [{ to: "/ai", name: "Ai" }];
const quizs = [{ to: "/cpu", name: "CPU" }];

export const levels = {
  lower,
  igcse,
  as_and_a,
  quizs,
};
