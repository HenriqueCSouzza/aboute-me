import { personalDetails } from "@/data/info";
import Title from "@/components/design/Title";
import Text from "@/components/design/Text";
import React from "react";

type LangType = "en-US" | "pt-BR";
interface AboutPageType {
  searchParams: {
    lang?: LangType;
  };
}

export default async function AboutPage({ searchParams }: AboutPageType) {
  const { presentation, name, tagline, job, phraseJob } = personalDetails;
  const lang = searchParams?.lang || "pt-BR";
  return (
    <main className="container mx-auto max-width">
      <section className="text-center md:text-left flex-col-reverse gap-16 md:gap-6 md:flex-row flex justify-between items-center">
        <div>
          <Title size="h4" tag="h1">
            {presentation[lang] + " " + name[lang]}
          </Title>
          <Text size="xl">
            {phraseJob[lang]}{" "}
            <span className="bg-clip-text bg-gradient text-transparent">
              {job[lang]}
            </span>
          </Text>
          <Text size="xl">{tagline[lang]}</Text>
        </div>
        <div className="flex justify-center items-center ">
          <picture className="w-1/2 sm:w-1/3 md:ml-auto ">
            <img
              src="/images/profile.jpg"
              alt="Henrique Souza"
              className="rounded-full"
            />
          </picture>
        </div>
      </section>
    </main>
  );
}
