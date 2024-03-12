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
  title: "Henrique Souza",
  description: "Frontend web developer",
  authors: [],
  keywords:
    "frontend senior, frontend software engineer, web developer, technology, development",
  robots: "*",
  creator: "Henrique Souza",
  category: "Technology",
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
