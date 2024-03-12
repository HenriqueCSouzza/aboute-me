import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Henrique Souza - Frontend Developer",
  description:
    "I hold a degree in Systems Analysis and Development and currently work as a frontend developer, specializing in web application architecture and development with a focus on creating scalable applications. My skills include utilizing technologies such as React, Next.js, Sass, Less, Styled-components, Emotion, Tailwind, Material UI, and Ant Design. I have extensive experience in API integration, working with both GraphQL (Apollo/Hasura) and REST, as well as in creating end-to-end tests using Cypress and Playwright.",
  keywords:
    "Henrique,Souza,Frontend,Developer,developer,software,engineer,web,mobile,fullstack,frontend,react,cypress,jest,typescript,javascript,node,next,storybook",
  robots: "index, follow",
  creator: "https://github.com/HenriqueCSouzza/about-me",
  openGraph: {
    title: "Henrique Souza - Frontend Developer",
    description:
      "I hold a degree in Systems Analysis and Development and currently work as a frontend developer, specializing in web application architecture and development with a focus on creating scalable applications. My skills include utilizing technologies such as React, Next.js, Sass, Less, Styled-components, Emotion, Tailwind, Material UI, and Ant Design. I have extensive experience in API integration, working with both GraphQL (Apollo/Hasura) and REST, as well as in creating end-to-end tests using Cypress and Playwright.",
  },
};

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "pt-BR" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    lang?: "en-US" | "pt-BR";
  };
}>) {
  return (
    <html lang={params.lang || "pt-BR"}>
      <body
        className={
          "bg-white dark:bg-dark-mode font-primary " + poppins.className
        }
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
