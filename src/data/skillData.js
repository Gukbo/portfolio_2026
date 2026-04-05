import ReactIcon from "../../assets/icons/react.svg?react";
import nextjsIcon from "../../assets/icons/nextjs.svg?react";
import tsIcon from "../../assets/icons/ts.svg?react";
import reduxIcon from "../../assets/icons/redux.svg?react";
import zustandIcon from "../../assets/icons/zustand.svg?react";
import reactQueryIcon from "../../assets/icons/reactquery.svg?react";
import tailwindIcon from "../../assets/icons/tailwind.svg?react";
import StyledComponentsIcon from "../../assets/icons/styledcomponents.svg?react";
import figmaIcon from "../../assets/icons/figma.svg?react";
import lottieIcon from "../../assets/icons/lottie.svg?react";
import nodejsIcon from "../../assets/icons/nodejs.svg?react";
import mysqlIcon from "../../assets/icons/mysql.svg?react";
import firebaseIcon from "../../assets/icons/firebase.svg?react";
import vercelIcon from "../../assets/icons/vercel.svg?react";
import awsIcon from "../../assets/icons/aws.svg?react";
import githubIcon from "../../assets/icons/github.svg?react";
import notionIcon from "../../assets/icons/notion.svg?react";
import jestIcon from "../../assets/icons/jest.svg?react";
import cypressIcon from "../../assets/icons/cypress.svg?react";
import rtlIcon from "../../assets/icons/rtl.svg?react";
import sentryIcon from "../../assets/icons/sentry.svg?react";

export const SKILLS_DATA = {
  Frontend_Core: [
    {
      name: "React",
      desc: "다수의 프로젝트 경험이 있으며 재사용 가능한 컴포넌트 단위로 UI를 설계하며, 일관된 사용자 경험을 제공합니다.  ",
      icon: ReactIcon,
    },
    {
      name: "Next.js",
      desc: "Next.js를 활용한 SSR/SSG 경험이 있으며, SEO 최적화와 빠른 페이지 로딩을 구현할 수 있습니다. ",
      icon: nextjsIcon,
    },
    {
      name: "TypeScript",
      desc: "정적 타이핑으로 런타임 에러를 사전에 방지하고, 명확한 인터페이스 정의를 통해 팀원과의 협업 효율을 높입니다. ",
      icon: tsIcon,
    },
    {
      name: "Redux",
      desc: "Flux 아키텍쳐를 이해하며, 복잡한 대규모 애플리케이션의 전역 상태를 효율적으로 관리할 수 있습니다. ",
      icon: reduxIcon,
    },
    {
      name: "Zustand",
      desc: "간단하고 가볍게 상태를 관리할 수 있으며, 비교적 적은 설정으로도 유연한 상태 관리가 가능합니다. ",
      icon: zustandIcon,
    },
    {
      name: "React Query",
      desc: "서버 상태관리를 할 수 있으며, 데이터 패칭과 캐싱을 효율적으로 처리할 수 있습니다. ",
      icon: reactQueryIcon,
    },
  ],
  Styling: [
    {
      name: "Tailwind CSS",
      desc: "다양한 프로젝트에서 css 프레임워크로 활용하여 빠르고 효율적인 스타일링을 구현합니다. ",
      icon: tailwindIcon,
    },
    {
      name: "Styled Components",
      desc: "컴포넌트 단위로 스타일을 관리할 수 있으며, 동적 스타일링과 테마 지원이 가능합니다. ",
      icon: StyledComponentsIcon,
    },
    {
      name: "Figma",
      desc: "디자인 협업과 프로토타이핑에 사용되며, 팀 간의 소통을 원활하게 합니다. ",
      icon: figmaIcon,
    },
    {
      name: "Framer Motion & Lottie",
      desc: "인터랙티브한 모션을 설계하여 사용자 경험을 향상시킬 수 있습니다. ",
      icon: lottieIcon,
    },
  ],
  BE_DB: [
    {
      name: "Node.js & Express",
      desc: "프론트엔드 요구사항에 최적화된 RESTful API를 설계하고 비즈니스 로직을 구현한 경험이 있습니다.",
      icon: nodejsIcon,
    },
    {
      name: "MySQL & MongoDB",
      desc: "데이터와 프로젝트의 성격에 따라 RDBMS와 NoSQL을 선택적으로 활용하며, 데이터 처리 속도를 최적화할 수 있습니다. ",
      icon: mysqlIcon,
    },
    {
      name: "Supabase & Firebase",
      desc: "서비스의 인증 및 실시간 DB 기능을 빠르게 구축하기 위해 사용한 경험이 있습니다.",
      icon: firebaseIcon,
    },
  ],
  Infra_Deploy: [
    {
      name: "Vercel",
      desc: "간단한 사이드 Vite 기반의 프로젝트를 빠르고 쉽게 배포할 수 있습니다.",
      icon: vercelIcon,
    },
    {
      name: "AWS & Docker",
      desc: "서비스의 확장성을 고려하여 컨테이너 환경을 구성하고, 인프라 비용과 보안을 고려한 배포 방식을 학습 중입니다.",
      icon: awsIcon,
    },
  ],
  Collab: [
    {
      name: "Git & GitHub",
      desc: "Git-Flow 전략을 이해하며, 협업시 효율적인 버전 관리를 위해 브랜치 전략을 활용할 수 있습니다.",
      icon: githubIcon,
    },
    {
      name: "Notion & Jira",
      desc: "문서화를 통해 프로젝트의 히스토리를 관리하고, 스프린트 단위의 태스크 관리를 통해 일정 준수를 최우선으로 합니다.",
      icon: notionIcon,
    },
  ],
  Test: [
    {
      name: "Jest & Vitest",
      desc: "비즈니스 로직과 유틸리티 함수의 정확성을 검증하며, 지속적인 코드 개선시에도 안정성을 확보할 수 있습니다. ",
      icon: jestIcon,
    },
    {
      name: "Cypress",
      desc: "사용자 관점에서의 테스트를 통해 기능적 완성도를 높이고, UI/UX의 일관성을 유지할 수 있습니다. ",
      icon: cypressIcon,
    },
    {
      name: "React Testing Library",
      desc: "React 컴포넌트의 사용자 경험을 테스트하고, 접근성을 보장할 수 있습니다. ",
      icon: rtlIcon,
    },
    {
      name: "Sentry",
      desc: "실시간 에러 모니터링을 통해 사용자에게 발생하는 문제를 신속하게 파악하고 대응할 수 있습니다. ",
      icon: sentryIcon,
    },
  ],
};
