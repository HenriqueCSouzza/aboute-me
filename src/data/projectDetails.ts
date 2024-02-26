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
    description: `Plataforma digital de vendas de imóveis`,
    technologies: [
      { label: "Next", color: "sky" },
      { label: "MaterialUi", color: "blue" },
      { label: "Graphql", color: "rose" },
    ],
  },
  {
    title: "Livia - Livar",
    image: "/images/projects/livia-livar.webp",
    description: `App de sugestão de imóveis para clientes`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "MaterialUi", color: "blue" },
      { label: "Vite", color: "emerald" },
      { label: "Graphql", color: "rose" },
    ],
  },
  {
    title: "Saas - Zaga",
    image: "/images/projects/saas-zaga.webp",
    description: `Plataforma que possibilita ter controle de estoque, logistica, estapas de entrega e etc...`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "MaterialUi", color: "blue" },
      { label: "Graphql", color: "rose" },
    ],
  },
  {
    title: "Comparador de Preços - Zaga",
    image: "/images/projects/comparador-precos-zaga.webp",
    description: `Aplicação que permite comparar preços de produtos do setor hospitalar`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "MaterialUi", color: "blue" },
      { label: "RestApi", color: "purple" },
    ],
  },
  {
    title: "Weather App",
    image: "/images/projects/weatherapp.webp",
    description: `Aplicativo de clima`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "MaterialUi", color: "rose" },
      { label: "RestApi", color: "purple" },
      { label: "Vite", color: "emerald" },
    ],
    previewLink: "https://weather-app-022.netlify.app/",
    githubLink: "https://github.com/HenriqueCSouzza/weather-app",
  },
  {
    title: "My Movie TMDB",
    image: "/images/projects/meymovietmdb.webp",
    description: `Aplicativo de listagem de filmes,series e etc...`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "Tailwind", color: "cyan" },
      { label: "RestApi", color: "purple" },
      { label: "Vite", color: "emerald" },
    ],
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Solid React",
    image: "/images/projects/solidreactjs.webp",
    description: `Aplicação criada para mostrar como funciona o Solid no React`,
    technologies: [
      { label: "React", color: "blue" },
      { label: "Vite", color: "emerald" },
    ],
    previewLink: "https://solidreactjs.netlify.app/users",
    githubLink: "https://github.com/HenriqueCSouzza/solid-react",
  },
];

export default projectDetails;
