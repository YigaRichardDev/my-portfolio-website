import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BrushIcon from "@mui/icons-material/Brush";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  details: string;
  approach: string;
  img: string;
}
// Utility function to create slugs from titles
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const servicesData: Service[] = [
  {
    id: 1,
    title: "Software Development",
    description:
      "I specialize in delivering innovative software development solutions tailored to meet the unique needs of your business. With a passion for technology and a commitment to excellence, I leverage industry expertise and cutting-edge technologies to create high-quality applications that enhance operational efficiency and drive growth.",
    icon: (
      <CodeIcon style={{ width: "40px", height: "40px", color: "white" }} />
    ),
    slug: createSlug("Software Development"),
    details: "I provide comprehensive software development services, including custom web application development, full-stack solutions, API development and integration, backend development, and code optimization & maintenance to ensure scalable, high-performing applications tailored to client needs.",
    approach: "I follow a comprehensive approach to software development, beginning with requirements gathering and analysis, moving through meticulous planning and project management, detailed UI/UX and system architecture design, development, rigorous testing and quality assurance, seamless deployment, and ongoing maintenance and updates to ensure a reliable, user-focused, and scalable product.",
    img: "https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?uid=R111143381&ga=GA1.1.983197529.1714832800&semt=ais_hybrid",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "I specialize in crafting intuitive UI/UX designs tailored to elevate user experiences and meet the unique needs of your business. With a deep passion for design and a commitment to excellence, I apply industry knowledge and the latest design principles to create visually appealing interfaces.",
    icon: (
      <DesignServicesIcon
        style={{ width: "40px", height: "40px", color: "white" }}
      />
    ),
    slug: createSlug("UI/UX Design"),
    details:
      "I offer end-to-end UI/UX design services, from initial user research and prototyping to creating high-fidelity designs and usability testing. My focus is on designing intuitive, visually cohesive interfaces that enhance the user experience and align with your brand’s objectives.",
    approach:
      "I start by conducting in-depth user research to understand target audiences, then move through wireframing and prototyping stages to iterate on user-centered designs. My design process includes usability testing and feedback incorporation, leading to a final polished design that enhances both usability and aesthetics.",
    img: "https://img.freepik.com/free-photo/high-angle-designer-holding-smartphone_23-2149930986.jpg?uid=R111143381&ga=GA1.1.983197529.1714832800&semt=ais_hybrid",
  },
  {
    id: 3,
    title: "Graphics Design",
    description:
      "I specialize in creating impactful graphic designs that bring your brand’s vision to life. With a passion for visual storytelling and attention to detail, I craft designs that capture attention and communicate effectively. I deliver high-quality visuals that resonate with audiences and elevate your brand’s presence, helping drive engagement and growth.",
    icon: (
      <BrushIcon style={{ width: "40px", height: "40px", color: "white" }} />
    ),
    slug: createSlug("Graphics Design"),
    details:
      "I provide versatile graphics design services, including branding, logo creation, social media graphics, and marketing collateral. My goal is to create cohesive, eye-catching designs that represent your brand’s identity and appeal to your target audience.",
    approach:
      "I begin with brand research and understanding the target market, then proceed to conceptualize and draft visuals that align with your brand's message. My design process includes revising drafts based on feedback to deliver final, impactful graphics that communicate your brand’s story effectively.",
    img: "https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg?uid=R111143381&ga=GA1.1.983197529.1714832800&semt=ais_hybrid",
  },
];

export default servicesData;
