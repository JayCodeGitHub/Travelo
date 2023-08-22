"use client";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useState, useLayoutEffect } from "react";
import Button from "./button";
import Image from "next/image";
import { NavBarItems, MobileNavBarItems } from "@/assets/navbarItems";

export default function NavBar() {
  const { scrollYProgress } = useScroll();
  const [top, setTop] = useState(false);

  const handleScrollChange = (value: any) => {
    if (value === 0) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  useLayoutEffect(() => {
    if (scrollYProgress.get() === 0) {
      setTop(true);
    } else {
      setTop(false);
    }
  }, []);

  scrollYProgress.onChange(handleScrollChange);

  return (
    <>
      <motion.nav
        className={`fixed top-0  z-10 md:flex hidden items-center md:justify-between w-full font-bold text-white px-24 xl:px-52 backdrop-blur-[3px] transition-all ${
          top ? "bg-transparent h-20" : "bg-white/5 h-24"
        }`}
      >
        <h1 className="md:text-xl">
          <Link href="/">Travelo</Link>
        </h1>
        <ul className="flex items-center justify-center gap-10 p-0 m-0 text-lg">
          {NavBarItems.map(({ href, title }) => (
            <li key={title}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
          <li>
            <Link href="/">
              <Button>Log In</Button>
            </Link>
          </li>
        </ul>
      </motion.nav>
      <motion.div className="fixed bottom-0 w-full h-24 bg-white/5 backdrop-blur-[3px] md:hidden z-10 text-white">
        <ul className="flex justify-around">
          {MobileNavBarItems.map(({ href, icon, title }) => (
            <li key="title">
              <Link
                href={href}
                className="flex flex-col items-center justify-center h-full"
              >
                <Image
                  className="w-auto p-4 h-3/4"
                  src={icon}
                  alt="Home Icon"
                  width={32}
                  height={32}
                />
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
