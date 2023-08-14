"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useLayoutEffect } from "react";

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
    <motion.nav
      className={`fixed z-10 flex items-center justify-between w-full font-bold text-white px-52 backdrop-blur-[3px] transition-all ${
        top ? "bg-transparent h-20" : "bg-white/10 h-24"
      }`}
    >
      <h1 className="text-xl">
        <Link href="/">Travelo</Link>
      </h1>
      <ul className="flex gap-10 p-0 m-0 text-lg">
        <li>
          <Link href="/offer">Offer</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </motion.nav>
  );
}
