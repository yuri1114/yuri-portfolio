import { Project } from "../model/Project";

// src/data/projects.js
export const projects: Project[] = [
  {
    title: "yuri-portfolio",
    description: "장유리 포트폴리오 사이트",
    tags: ["React", "TypeScript", "scss"],
    image: "/thumbnail04.png",
    notionLink: "https://www.notion.so/...",
  },
  {
    title: "moodie 무디",
    description: "TMDB API를 기반으로 제작한 영화 정보 탐색 웹앱",
    tags: ["React", "JavaScript", "scss"],
    image: "/thumbnail01.png",
    notionLink:
      "https://three-hamster-1bb.notion.site/movie-web-moodie-1e487d8f0b52800cb8e6ee2bc64b2771?pvs=4",
  },
  {
    title: "mee-gam 미감",
    description: "React 쇼핑몰 SPA 구현 프로젝트",
    tags: ["React", "JavaScript", "scss"],
    image: "/thumbnail02.png",
    notionLink:
      "https://three-hamster-1bb.notion.site/mee-gam-1e487d8f0b528055b19dfe966800a657?pvs=4",
  },
  {
    title: "weather-web",
    description: "OpenWeather API를 활용해 현재 위치와 특정 도시들의 날씨 표시",
    tags: ["React", "JavaScript", "css"],
    image: "/thumbnail03.png",
    notionLink:
      "https://three-hamster-1bb.notion.site/weather-web-1e487d8f0b5280a8b89aecf2a1990bd2?pvs=4",
  },
  {
    title: "TO DO LIST",
    description: "자바스크립트를 공부하며 만들어본 투두 프로젝트",
    tags: ["JavaScript", "css"],
    image: "/thumbnail05.png",
    notionLink:
      "https://three-hamster-1bb.notion.site/TO-DO-LIST-1e487d8f0b52803691bfe2aad265055c?pvs=4",
  },
];
