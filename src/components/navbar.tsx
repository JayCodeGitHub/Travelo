"use client";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useState, useLayoutEffect } from "react";
import Button from "./button";
import Image from "next/image";

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
          <li>
            <Link href="/offer">Offer</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/">
              <Button>Log In</Button>
            </Link>
          </li>
        </ul>
      </motion.nav>
      <motion.div className="fixed bottom-0 w-full h-24 bg-white/5 backdrop-blur-[3px] md:hidden text-white">
        <ul className="flex justify-around">
          <li>
            <Link
              href="/"
              className="flex flex-col items-center justify-center h-full"
            >
              <Image
                className="w-auto p-4 h-3/4"
                src="/icons/home.svg"
                alt="Home Icon"
                width={32}
                height={32}
              />
              Travelo
            </Link>
          </li>
          <li>
            <Link
              href="/offer"
              className="flex flex-col items-center justify-center h-full"
            >
              <Image
                className="w-auto p-4 h-3/4"
                src="/icons/list.svg"
                alt="Home Icon"
                width={32}
                height={32}
              />
              Offer
            </Link>
          </li>
          <li>
            <Link
              href="/favorites"
              className="flex flex-col items-center justify-center h-full"
            >
              <Image
                className="w-auto p-4 h-3/4"
                src="/icons/heart.svg"
                alt="Home Icon"
                width={32}
                height={32}
              />
              Favorites
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="flex flex-col items-center justify-center h-full"
            >
              <Image
                className="w-auto p-4 h-3/4"
                src="/icons/edit.svg"
                alt="Home Icon"
                width={32}
                height={32}
              />
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex flex-col items-center justify-center h-full"
            >
              <Image
                className="w-auto p-4 h-3/4"
                src="/icons/user.svg"
                alt="Home Icon"
                width={32}
                height={32}
              />
              Log In
            </Link>
          </li>
        </ul>
      </motion.div>
    </>
  );
}
