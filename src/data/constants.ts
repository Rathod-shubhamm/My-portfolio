// Skills mapped to original Spline keyboard object names
// Row 1: js→ML, ts→TS, html→RAG, css→HTML, react→React, vue→JS
// Row 2: nextjs→Python, tailwind→AI Agent, nodejs→ANN, express→SQL, postgres→NLP, mongodb→MongoDB
// Row 3: git→Git, github→GitHub, prettier→Cursor, npm→FastAPI, firebase→TensorFlow, wordpress→VectorDB
// Row 4: linux→LangChain, docker→n8n, nginx→PyTorch, aws→AWS, vim→ANN, vercel→Vercel

export enum SkillNames {
  JS = "js",           // ML
  TS = "ts",           // TypeScript
  HTML = "html",       // RAG
  CSS = "css",         // HTML
  REACT = "react",     // React
  VUE = "vue",         // JavaScript
  NEXTJS = "nextjs",   // Python
  TAILWIND = "tailwind", // AI Agent
  NODEJS = "nodejs",   // ANN
  EXPRESS = "express", // SQL
  POSTGRES = "postgres", // NLP
  MONGODB = "mongodb", // MongoDB
  GIT = "git",         // Git
  GITHUB = "github",   // GitHub
  PRETTIER = "prettier", // Cursor
  NPM = "npm",         // FastAPI
  FIREBASE = "firebase", // TensorFlow
  WORDPRESS = "wordpress", // Vector DB
  LINUX = "linux",     // LangChain
  DOCKER = "docker",   // n8n
  NGINX = "nginx",     // PyTorch
  AWS = "aws",         // AWS
  VIM = "vim",         // ANN (Deep Learning)
  VERCEL = "vercel",   // Vercel
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  // Row 1
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "Machine Learning",
    shortDescription: "Teaching machines to learn from data and make intelligent predictions 🤖📊",
    color: "#ff6f61",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript with superpowers - type safety for scalable applications 💪🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "RAG",
    shortDescription: "Retrieval Augmented Generation - supercharging LLMs with real-time knowledge 📚🔍",
    color: "#9c27b0",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "HTML",
    shortDescription: "The backbone of the web - structuring content with semantic markup 🌐📄",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Building dynamic, component-based user interfaces with ease ⚛️🚀",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "JavaScript",
    shortDescription: "The language powering the modern web - versatile and everywhere 🌐💛",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  // Row 2
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Python",
    shortDescription: "The go-to language for AI/ML - clean, powerful, and versatile 🐍🔬",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "AI Agents",
    shortDescription: "Building autonomous AI systems that reason, plan, and take action 🤖🎯",
    color: "#00bcd4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Neural Nets",
    shortDescription: "Deep learning architectures inspired by the human brain 🧠⚡",
    color: "#e91e63",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "SQL",
    shortDescription: "Querying and managing relational databases with precision 🗄️📊",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "NLP",
    shortDescription: "Natural Language Processing - teaching machines to understand human language 💬🤖",
    color: "#4caf50",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Flexible NoSQL database for modern, scalable applications 🍃💾",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  // Row 3
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Version control mastery - tracking every change with precision 🔄📝",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Collaborating on code and contributing to open source projects 🐙💻",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Cursor",
    shortDescription: "AI-powered code editor for 10x developer productivity 🖱️⚡",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "FastAPI",
    shortDescription: "High-performance Python framework for building modern APIs 🚀🐍",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "TensorFlow",
    shortDescription: "Google's powerhouse framework for deep learning at scale 🔥🧠",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "Vector DB",
    shortDescription: "Storing and querying embeddings for semantic search and AI apps 📐🔍",
    color: "#7c4dff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  // Row 4
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "LangChain",
    shortDescription: "Building powerful LLM applications with chains and agents 🔗🤖",
    color: "#1a5f2a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "n8n",
    shortDescription: "Workflow automation platform for connecting AI and apps seamlessly 🔄🤖",
    color: "#ea4b71",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "PyTorch",
    shortDescription: "Dynamic deep learning framework loved by researchers worldwide 🔥📚",
    color: "#ee4c2c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud infrastructure for deploying and scaling AI solutions ☁️🚀",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Deep Learning",
    shortDescription: "Building multi-layer neural networks for complex pattern recognition 🧠🔮",
    color: "#673ab7",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Seamless deployment platform for modern web applications ▲🌐",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};




export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

