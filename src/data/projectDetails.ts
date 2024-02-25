import { ChipVariantProps } from "@/components/design/Chip";

export type Tech = { label: string; color: ChipVariantProps["color"] };
export type ProjectType = {
  title: string;
  image: string;
  description: string;
  technologies: Tech[];
  previewLink?: string;
  githubLink?: string;
};
export type ProjectDetails = ProjectType[];

export const projectDetails: ProjectDetails = [
  {
    title: "Catálogo - Livar",
    image: "/images/projects/catalog-livar.webp",
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    technologies: [
      { label: "Next", color: "sky" },
      { label: "MaterialUi", color: "blue" },
    ],
  },
  {
    title: "Livia - Livar",
    image: "/images/projects/livia-livar.webp",
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "MaterialUi", color: "blue" },
      { label: "Vite", color: "emerald" },
    ],
  },
  {
    title: "Weather App",
    image: "/images/projects/weatherapp.webp",
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "MaterialUi", color: "rose" },
      { label: "Vite", color: "emerald" },
    ],
    previewLink: "https://weather-app-022.netlify.app/",
    githubLink: "https://github.com/HenriqueCSouzza/weather-app",
  },
  {
    title: "My Movie TMDB",
    image: "/images/projects/meymovietmdb.webp",
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "Tailwind", color: "cyan" },
      { label: "Vite", color: "emerald" },
    ],
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Solid React",
    image: "/images/projects/solidreactjs.webp",
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "Vite", color: "emerald" },
    ],
    previewLink: "https://solidreactjs.netlify.app/users",
    githubLink: "https://github.com/HenriqueCSouzza/solid-react",
  },

  {
    title: "Project title 6",
    image: "/images/projects/project6.jpg",
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "MaterialUi", color: "blue" },
    ],
  },
];

export default projectDetails;
