import { ChipVariantProps } from "@/components/design/Chip";

export type Tech = { label: string; color: ChipVariantProps["color"] };
export type ProjectType = {
  title: string;
  image: string;
  description: string;
  technologies: Tech[];
  previewLink: string;
  githubLink: string;
};
export type ProjectDetails = ProjectType[];

export const projectDetails: ProjectDetails = [
  {
    title: "Weather App",
    image: "/images/projects/weatherapp.webp",
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "MaterialUi", color: "rose" },
    ],
    previewLink: "https://weather-app-022.netlify.app/",
    githubLink: "https://github.com/HenriqueCSouzza/weather-app",
  },
  {
    title: "My movie TMDB",
    image: "/images/projects/meymovietmdb.webp",
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "MaterialUi", color: "blue" },
    ],
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 3",
    image: "/images/projects/project3.jpg",
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "MaterialUi", color: "blue" },
    ],
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 4",
    image: "/images/projects/project4.jpg",
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "MaterialUi", color: "blue" },
    ],
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 5",
    image: "/images/projects/project5.jpg",
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "MaterialUi", color: "blue" },
    ],
    previewLink: "https://google.com",
    githubLink: "https://github.com",
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
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

export default projectDetails;
