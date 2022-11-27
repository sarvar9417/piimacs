import cs from "../assets/images/CS.jpeg";
import { igcseDatas } from "../datas/igcse";
import { map } from "lodash";

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

const lower = [
  { to: "/data", name: "Data" },
  { to: "/cs", name: "CS" },
];
const igcse = map(igcseDatas, ({ name, sections }) => ({
  name,
  sections: sections,
}));
const as_and_a = [{ name: "Ai" }];
const quizs = [{ name: "CPU" }];

export const levels = {
  lower,
  igcse,
  as_and_a,
  quizs,
};
