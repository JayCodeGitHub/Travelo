import Image from "next/image";

export default function Hero() {
  return (
    <header>
      <Image
        className="w-full"
        src="/images/hero.jpg"
        alt="Hero Image"
        width={1522}
        height={1005}
      />
      <h1>Travelo</h1>
    </header>
  );
}
