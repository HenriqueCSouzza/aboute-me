import React from "react";
import Work from "@/components/Work";
import { personalDetails } from "@/data/info";
import workDetails from "@/data/workDetails";
import Title from "@/components/design/Title";
import Text from "@/components/design/Text";

type LangType = "en-US" | "pt-BR";

interface PageType {
  params: {
    lang?: LangType;
  };
}

export default async function AboutPage({ params }: PageType) {
  const lang = params?.lang || "pt-BR";
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <Title tag="h1">{lang === "en-US" ? "About Me" : "Sobre mim"}</Title>

        <div className="mt-5">
          <Text color="textContent">
            {personalDetails.about[lang].paragraph1}
          </Text>
          <br />
          <Text color="textContent">
            {personalDetails.about[lang].paragraph2}
          </Text>
        </div>
      </section>
      <section className="mt-9">
        <Title tag="h1">
          {lang === "en-US" ? "Work Experience" : "Experiências"}
        </Title>

        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position[lang]}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}
