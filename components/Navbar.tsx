"use client"
import React from "react";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { useState } from "react";
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Blog",
    page: "blog",
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme ? theme : "dark"
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-blue-200 dark:bg-zinc-800 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <div className="container flex items-center space-x-2">
                <h2 className="transition ease-in-out delay-150 hover:scale-110 duration-300 text-2xl font-bold cursor-pointer">
                  Manoj Gowda
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)} 
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
          </div>
        </div>
        </div>

        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}>
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => (
                <Link key={idx} href={`/${item.page}`}>
                  <p onClick={() => setNavbar(!navbar)} className="block transition ease-in-out delay-100 hover:scale-110 duration-200 underline lg:inline-block hover:no-underline text-xl text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 hover:-translate-x-0.5 cursor-pointer">
                    {item.label}
                  </p>
                </Link>
              ))}
              {currentTheme === "dark" ? (
                <button
                title="light mode"
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                title="dark mode"
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl" 
                >
                  <RiMoonFill size={25} color="black"/>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
