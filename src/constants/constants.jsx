import { Briefcase, Code, User } from "lucide-react";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const hero = {
  prefix: "Hi I'm",
  fname: "Nitesh",
  lname: "Dubey",
  desc: "Hi there i'm learning Webdevelopment",
};

export const about = {
  section: { title: "me", label: "about" },
  intro: {
    title: "passainate developer",
    desc1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, exercitationem placeat illo similique molestias deleniti.",
    desc2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, exercitationem placeat illo similique molestias deleniti.",
    resumeLink: "#contact",
  },
  work: [
    {
      title: "web development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, exercitationem placeat illo similique molestias deleniti.",
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      title: "Project Managemnt",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, exercitationem placeat illo similique molestias deleniti.",
      icon: <User className="h-6 w-6 text-primary" />,
    },
    {
      title: "web development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, exercitationem placeat illo similique molestias deleniti.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
    },
  ],
};

export const skills = {
  section: { title: "Skills", label: "My" },
  categories: ["all", "frontend", "backend", "tools"],
  mySkills: [
    { name: "html/css", level: 95, category: "frontend" },
    { name: "javascript", level: 80, category: "frontend" },
    { name: "React", level: 70, category: "frontend" },
    { name: "Tailwind CSS", level: 80, category: "frontend" },

    { name: "html/css", level: 95, category: "backend" },
    { name: "javascript", level: 80, category: "backend" },
    { name: "React", level: 70, category: "backend" },
    { name: "Tailwind CSS", level: 80, category: "backend" },

    { name: "html/css", level: 95, category: "tools" },
    { name: "javascript", level: 80, category: "tools" },
    { name: "React", level: 70, category: "tools" },
    { name: "Tailwind CSS", level: 80, category: "tools" },
  ],
};

export const projects = {
  section: {
    title: "projects",
    label: "featured",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ducimus sunt fuga laborum! Corrupti incidunt, itaque molestiae libero quibusdam nisi.",
  },
  myProjects: [
    {
      id: 1,
      title: "project-1",
      desc: "a beautyfull app",
      image: "/projects/p1.png",
      tags: ["ReactJs", "Tailwindcss"],
      demoUrl: "#",
      github: "#",
    },
    {
      id: 2,
      title: "project-2",
      desc: "a beautyfull app",
      image: "/projects/p2.png",
      tags: ["ReactJs", "Tailwindcss"],
      demoUrl: "#",
      github: "#",
    },
    {
      id: 3,
      title: "project-3",
      desc: "a beautyfull app",
      image: "/projects/p3.png",
      tags: ["ReactJs", "Tailwindcss"],
      demoUrl: "#",
      github: "#",
    },
  ],
};

export const contact = {
  section: {
    title: "touch",
    label: "get in",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ducimus sunt fuga laborum! Corrupti incidunt, itaque molestiae libero quibusdam nisi.",
  },
  info: {
    title: "contact information",
    data: [
      {
        label: "Email",
        source: "email@gmail.com",
        icon: <Mail className="h-6 w-6 text-primary"></Mail>,
      },
      {
        label: "Phone",
        source: "1234567898",
        icon: <Phone className="h-6 w-6 text-primary"></Phone>,
      },
      {
        label: "Location ",
        source: "thane west 400604",
        icon: <MapPin className="h-6 w-6 text-primary"></MapPin>,
      },
    ],
  },
  social: {
    title: "Connect With Me",
    data: [
      { icon: <Linkedin></Linkedin>, link: "" },
      { icon: <Instagram></Instagram>, link: "" },
      { icon: <Twitter></Twitter>, link: "" },
      { icon: <Github></Github>, link: "" },
    ],
  },
};
