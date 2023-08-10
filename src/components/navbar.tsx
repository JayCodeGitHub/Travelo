import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between w-full h-20 font-bold px-52">
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
