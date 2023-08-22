import Image from "next/image";
import Button from "./button";
import RoudMap from "./roadMap";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        className="object-cover w-full h-full opacity-60"
        src="/images/hero.jpg"
        alt="Hero Image"
        width={1522}
        height={1005}
      />
      <div className="absolute flex lg:justify-between justify-center w-full transform -translate-x-1/2 lg:-translate-y-1/2 -translate-y-2/3 top-1/2 left-1/2 2xl:px-52 xl:px-24 px-5 h-4/6">
        <header className="flex flex-col items-start justify-center h-full max-w-lg gap-8 ">
          <h1 className="lg:text-5xl text-3xl font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <p className="text-x text-slate-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button>See Offer</Button>
        </header>
        <RoudMap />
      </div>
    </div>
  );
}
