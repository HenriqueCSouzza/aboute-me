"use client";
import { useState } from "react";
import NavLink from "next/link";
import { socialMediaUrl } from "@/data/info";
import React from "react";

const linkList = [
  {
    label: {
      "en-US": "Home",
      "pt-BR": "Início",
    },
    link: "/",
  },
  {
    label: {
      "en-US": "About",
      "pt-BR": "Sobre",
    },
    link: "/about",
  },
  {
    label: {
      "en-US": "Projects",
      "pt-BR": "Projetos",
    },
    link: "/projects",
  },
];
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkedin, github, twitter } = socialMediaUrl;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <NavLink
          href="/"
          className="text-lg text-black dark:text-light-content md:text-lg xl:text-lg xl:leading-tight font-bold"
        >
          Henrique Souza
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav
        className={` ${
          !isOpen ? "hidden" : null
        } text-center md:flex justify-between`}
      >
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          {React.Children.toArray(
            linkList.map(({ label, link }) => (
              <li className="pb-1 md:pb-0 font-light">
                <NavLink href={link} onClick={toggleClass}>
                  {label["pt-BR"]}
                </NavLink>
              </li>
            ))
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
