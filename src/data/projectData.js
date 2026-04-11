import chatbotThumbnail from "../../assets/projects/chatbot.svg?react";
import zeebraThumbnail from "../../assets/projects/zeebra.svg?react";
import conodexThumbnail from "../../assets/projects/conodex.svg?react";
import ssalThumbnail from "../../assets/projects/ssalthefarm.svg?react";
import portfolioThumbnail from "../../assets/projects/portfolio.svg?react";

export const PROJECTS_DATA = [
  {
    id: "chatbot",
    thumbnail: chatbotThumbnail,
    name: "가상 캐릭터 챗봇",
    date: "2024.03 - 2024.07",
    desc: "OTT 플랫폼 시청자의 몰입도를 높이기 위해, 가상 캐릭터와 실시간으로 대화할 수 있는 AI 챗봇 서비스입니다.",
    team: "Web Team 3명, Web Lead",
    stack: "Next.js, TypeScript, Tailwind CSS, SWR, NextAuth, Prisma, Mongodb",
    achieve:
      "Next.js와 Prisma 기반의 풀스택 아키텍처 설계, SWR을 활용한 실시간 대화 UX 구현, 멘토링 및 코드 리뷰",
    solve: "",
    image: "",
    github: "https://github.com/shshjhjh4455/character_chatbot_web",
    velog: "",
  },
  {
    id: "zeebra",
    thumbnail: zeebraThumbnail,
    name: "ZEEBRA",
    date: "2025.10 - 2025.12",
    desc: "KREAM을 모티브로 한 패션 이커머스 플랫폼입니다. 아키텍처 설계, UI/UX 구현, 프론트엔드 성능 최적화 전 과정을 주도했습니다.",
    team: "FE 1명, BE 4명",
    stack:
      "React, TypeScript, Vite, Tailwind CSS, Redux, Sentry, RTL, Vitest, Cypress",
    achieve:
      "단순한 기능 구현을 넘어, 대규모 트래픽에서도 견고한 안정성과 쾌적한 렌더링 성능(Lighthouse 90점대)을 확보하는 데 집중했습니다.",
    solve: "",
    image: "",
    github: "https://github.com/zeebra-profect/zeebra-fe?tab=readme-ov-file`",
    velog:
      "https://velog.io/@mebung2/Jest%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%EA%B3%BC-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B3%A0%EB%8F%84%ED%99%94-0-",
  },
  {
    id: "conodex",
    thumbnail: conodexThumbnail,
    name: "Conodex",
    date: "2026.01 - 2026.01",
    desc: "TJ미디어 기반 노래 검색 및 애창곡 관리 서비스입니다.",
    team: "1인 개발",
    stack: "React, TypeScript, Vite, React Query, Zustand",
    achieve:
      "데이터 캐싱 및 디바운싱을 통해 최적화된 검색 경험을 구현한 프로젝트입니다.",
    solve:
      "성능 최적화, 관리 상태 효율화, 끊김 없는 사용자 흐름 확보 (UX 고도화)",
    image: "",
    github: "https://github.com/Gukbo/Conodex",
    velog: "",
  },
  {
    id: "ssalthefarm",
    thumbnail: ssalThumbnail,
    name: "SsaltheFarm",
    date: "2026.02 - 2026.03",
    desc: "오늘의 쌀먹 정보부터 게임 공략까지, 게이머들을 위한 정보 공유 커뮤니티입니다.",
    team: "1인 개발",
    stack:
      "Next.js, TypeScript, Tailwind CSS, Axios, NestJS, Nodejs, PostMan, Dbeaver",
    achieve:
      "단순한 게시판 기능을 넘어 UI와 안정적인 데이터 처리를 목표로 한 풀스택 사이드 프로젝트",
    solve: "CRUD, 폴더 구조 및 설계 최적화, API 데이터 구조 불일치 해결",
    image: "",
    github: "https://github.com/Gukbo/ssalthefarm-client",
    velog:
      "https://velog.io/@mebung2/%ED%92%80%EC%8A%A4%ED%83%9D-%EA%B0%9C%EB%B0%9C-%EA%B3%B5%EB%B6%80%EC%9D%98-%ED%95%84%EC%9A%94%EC%84%B1%EC%9D%84-%EA%B9%A8%EB%8B%AB%EB%8B%A4",
  },
  {
    id: "portfolio",
    thumbnail: portfolioThumbnail,
    name: "Portfolio",
    date: "2026.04 - 2026.04",
    desc: "개인 포트폴리오입니다.",
    team: "1인 개발",
    stack: "React, JavaScript, Vite, Tailwind CSS, lottie, lucide",
    achieve:
      "디자인적 요소와 반응형을 곁들인 직관적인 레이아웃 배치를 통해 깔끔한 UI를 고려",
    solve: "피그마를 통한 기획 및 설계를 선행한 반응형 UI 디자인",
    image: "",
    github: "https://github.com/Gukbo/portfolio_2026",
    velog: "",
  },
];
