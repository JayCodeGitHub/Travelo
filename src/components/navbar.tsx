import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed z-10 flex items-center justify-between w-full h-20 font-bold text-white px-52 backdrop-blur-[3px] bg-white/10">
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
    </nav>
  );
}
