import Image from "next/image";
import { personalDetails } from "@/data/info";
import GenericElement from "@/components/GenericElement";

type LangType = "en-US" | "pt-BR";
interface HomePageType {
  params: {
    lang?: LangType;
  };
}

export default async function HomePage({ params }: HomePageType) {
  const { presentation, name, tagline } = personalDetails;
  const lang = params?.lang || "pt-BR";
  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center xl:text-center">
      <div className="">
        <GenericElement
          tag="h1"
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold xl:text-center"
        >
          {presentation[lang]}
        </GenericElement>

        <h1 className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {name}
        </h1>
        <h2 className="text-xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {tagline[lang]}
        </h2>
      </div>
      <div className="mt-5 md:mt-0 flex justify-center items-center">
        <Image
          className="w-1/2 md:ml-auto rounded-full"
          src="/images/profile.jpg"
          width="350"
          height="350"
          alt="Henrique Souza"
        />
      </div>
    </main>
  );
}
