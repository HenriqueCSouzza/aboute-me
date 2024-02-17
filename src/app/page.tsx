import Image from "next/image";
import { personalDetails } from "@/data/info";

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
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {presentation[lang]}
        </h1>
        <h1 className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {name}
        </h1>
        <h2 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          {tagline[lang]}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
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
