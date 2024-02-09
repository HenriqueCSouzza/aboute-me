"use client";

import { useRef } from "react";
import Image from "next/image";

export default function Home() {
  const h11 = useRef<HTMLHeadingElement>(null);
  const h12 = useRef<HTMLHeadingElement>(null);
  const h13 = useRef<HTMLHeadingElement>(null);
  const myimageref = useRef<HTMLImageElement>(null);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Henrique
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          HenriqueCsouzza
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <Image
          ref={myimageref}
          className="w-1/2 md:ml-auto"
          src="/images/myimage.jpg"
          width="349"
          height="349"
          alt="Pavan MG"
        />
      </div>
    </main>
  );
}
