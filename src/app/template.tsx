import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function TemplateApp({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
