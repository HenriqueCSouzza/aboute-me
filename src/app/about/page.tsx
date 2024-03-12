"use client";
import React, { useState } from "react";
import Work from "@/components/Work";
import { personalDetails } from "@/data/info";
import workDetails from "@/data/workDetails";
import Title from "@/components/design/Title";
import Text from "@/components/design/Text";
import Dialog from "@/components/design/Dialog";
import WorkDialog from "@/components/WorkDialog";

type LangType = "en-US" | "pt-BR";

interface PageType {
  searchParams: {
    lang?: LangType;
  };
}

export default function AboutPage({ searchParams }: PageType) {
  const lang = searchParams?.lang || "pt-BR";

  const [isOpen, setIsOpen] = useState(false);
  const [workId, setWorkId] = useState<number>();
  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

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
          workDetails.map(
            ({ id, Position, Company, Location, Type, Duration }) => (
              <Work
                position={Position[lang]}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
                onClick={() => {
                  setWorkId(id);
                  handleOpenDialog();
                }}
              />
            )
          )
        )}
      </section>
      <Dialog.Root isOpen={isOpen} onClose={handleCloseDialog}>
        <WorkDialog id={workId} lang={lang} />
      </Dialog.Root>
    </main>
  );
}
