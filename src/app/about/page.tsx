import React from "react";
import Work from "@/components/Work";
import { personalDetails } from "@/data/info";
import workDetails from "@/data/workDetails";

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
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold ">
          {lang === "en-US" ? "About Me" : "Sobre mim"}
        </h1>

        <div className="mt-5">
          <p className="text-content lg:max-w-3xl">
            {personalDetails.about[lang].paragraph1}
          </p>
          <br />
          <p className="text-content lg:max-w-3xl">
            {personalDetails.about[lang].paragraph2}
          </p>
        </div>
      </section>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {lang === "en-US" ? "Work Experience" : "Experiências"}
        </h1>
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
