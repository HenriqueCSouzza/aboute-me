import NextImage from "next/image";

type LangType = "en-US" | "pt-BR";

interface PageType {
  params: {
    lang?: LangType;
  };
}

export default async function TechnologiesPage({ params }: PageType) {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I&apos;ve been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <NextImage
          src="/images/techstack/html.png"
          title="html"
          alt=""
          width="70"
          height="50"
        />
        <NextImage
          src="/images/techstack/html.png"
          title="CSS"
          alt=""
          width="70"
          height="50"
        />
        <NextImage
          src="/images/techstack/html.png"
          title="JavaScript"
          alt=""
          width="70"
          height="50"
        />
        <NextImage
          src="/images/techstack/html.png"
          title="React"
          alt=""
          width="70"
          height="50"
        />
        <NextImage
          src="/images/techstack/html.png"
          title="Redux"
          alt=""
          width="70"
          height="50"
        />
        <NextImage
          src="/images/techstack/html.png"
          title="Tailwind CSS"
          alt=""
          width="70"
          height="50"
        />
        <NextImage
          src="/images/techstack/html.png"
          title="Bootstrap"
          alt=""
          width="70"
          height="50"
        />
        <NextImage
          src="/images/techstack/html.png"
          title="SASS"
          alt=""
          width="70"
          height="50"
        />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <NextImage
          src="/images/techstack/html.png"
          title="Visual Studio Code"
          alt=""
          width="70"
          height="50"
        />
        <NextImage
          src="/images/techstack/html.png"
          title="Git"
          alt="Git"
          width="70"
          height="50"
        />
        <NextImage
          src="/images/techstack/html.png"
          title="Github"
          alt="Github"
          width="70"
          height="50"
        />
        <NextImage
          src="/images/techstack/html.png"
          title="Figma"
          alt="Figma"
          width="70"
          height="50"
        />
        <NextImage
          src="/images/techstack/html.png"
          title="NPM"
          alt="NPM"
          width="70"
          height="50"
        />
        <NextImage
          src="/images/techstack/html.png"
          title="Postman"
          alt="Postman"
          width="70"
          height="50"
        />
      </section>
    </main>
  );
}
