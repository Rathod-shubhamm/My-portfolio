import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI" />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap />,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java" />,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [

  { // 01. Social Media Content Automation
    id: "socialmediaautomation",
    category: "AI & Automation",
    title: "Social Media Content Automation",
    src: "/assets/projects-screenshots/Gemini_Generated_Image_x7q8w0x7q8w0x7q8.png",
    screenshots: ["placeholder.png"],
    live: "#",
    github: "https://github.com/Rathod-shubhamm",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An AI-powered content automation platform that generates, schedules, and posts
            content across multiple social media platforms. Uses LLMs to create engaging
            posts tailored to each platform&apos;s unique style and audience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>AI-generated content for Twitter, LinkedIn, Instagram</li>
            <li>Smart scheduling based on audience engagement patterns</li>
            <li>Brand voice customization and consistency</li>
            <li>Analytics dashboard for performance tracking</li>
          </ul>
        </div>
      );
    },
  },
  { // 02. Football Player Performance Prediction
    id: "footballplayerprediction",
    category: "AI & Sports Analytics",
    title: "Football Player Performance Prediction",
    src: "/assets/projects-screenshots/Screenshot 2025-12-15 at 11.17.42 PM.png",
    screenshots: ["placeholder.png"],
    live: "#",
    github: "https://github.com/Rathod-shubhamm",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres, PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <div className="w-full mb-8 rounded-lg overflow-hidden">
            <video
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="/assets/projects-screenshots/football-player-prediction-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <TypographyP className="font-mono ">
            A machine learning platform that predicts football player performance using historical
            data, match statistics, and advanced analytics. Helps coaches and scouts make data-driven
            decisions about player selection, training, and tactical planning.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>ML-based performance prediction models</li>
            <li>Historical data analysis and trend identification</li>
            <li>Injury risk assessment and player fitness monitoring</li>
            <li>Interactive dashboards for performance visualization</li>
          </ul>
        </div>
      );
    },
  },
  { // 03. Crypto News Aggregation Platform
    id: "cryptonewsaggregation",
    category: "AI & Automation",
    title: "Crypto News Aggregation Platform",
    src: "/assets/projects-screenshots/Gemini_Generated_Image_1xdny61xdny61xdn.png",
    screenshots: ["placeholder.png"],
    live: "#",
    github: "https://github.com/Rathod-shubhamm",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A comprehensive cryptocurrency news aggregation platform that collects and organizes
            news from multiple sources. Features AI-powered sentiment analysis, real-time price
            tracking, and personalized news feeds to help traders stay informed.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Real-time news aggregation from multiple sources</li>
            <li>AI-powered sentiment analysis and news categorization</li>
            <li>Price tracking and market trend visualization</li>
            <li>Customizable news feeds and alerts</li>
          </ul>
        </div>
      );
    },
  },
  { // 04. Trans-User Encrypted File Sharing System
    id: "transuserencryptedfilesharing",
    category: "Security & Privacy",
    title: "Trans-User Encrypted File Sharing System",
    src: "/assets/projects-screenshots/Gemini_Generated_Image_tngj9ntngj9ntngj.png",
    screenshots: ["placeholder.png"],
    live: "#",
    github: "https://github.com/Rathod-shubhamm",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A secure peer-to-peer file sharing system with end-to-end encryption designed for
            cross-user file transfers. Files are encrypted client-side before transmission,
            ensuring complete privacy and security. Features self-destructing links, password
            protection, and detailed access logs.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>End-to-end AES-256 encryption for secure transfers</li>
            <li>Self-destructing links with custom expiration times</li>
            <li>Password-protected file access</li>
            <li>Cross-user sharing with detailed access logs and audit trails</li>
          </ul>
        </div>
      );
    },
  },
  { // 05. End to End E-Course Generation
    id: "endtoendecoursegeneration",
    category: "AI & Education",
    title: "End to End E-Course Generation",
    src: "/assets/projects-screenshots/Gemini_Generated_Image_bzebv4bzebv4bzeb.png",
    screenshots: ["placeholder.png"],
    live: "#",
    github: "https://github.com/Rathod-shubhamm",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An AI-powered platform that generates complete e-courses from start to finish.
            From curriculum design to content creation, video scripts, quizzes, and assessments,
            this platform automates the entire course creation workflow using advanced LLMs
            and machine learning algorithms.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Automated curriculum and course structure generation</li>
            <li>AI-generated course content, lessons, and materials</li>
            <li>Interactive quiz and assessment creation</li>
            <li>Video script generation and multimedia content support</li>
            <li>Progress tracking and learner analytics dashboard</li>
          </ul>
        </div>
      );
    },
  },
  { // 06. Personal Portfolio
    id: "portfolio",
    category: "Portfolio",
    title: "Personal Portfolio",
    src: "/assets/projects-screenshots/myportfolio/landing-new.png",
    screenshots: ["assets/projects-screenshots/myportfolio/landing-new.png"],
    live: "https://shubhamrathod.com/",
    github: "https://github.com/Rathod-shubhamm/My-portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground! A stunning 3D interactive portfolio
            showcasing my skills as an AI Context Engineer. Built with Next.js,
            Spline for 3D, and smooth Framer Motion animations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects
          </TypographyH3>
          <p className="font-mono mb-2">
            Check out the interactive 3D keyboard! Each keycap represents an AI/ML
            skill and reveals descriptions on hover. It&apos;s like typing, but make it art.
          </p>
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
];
export default projects;

