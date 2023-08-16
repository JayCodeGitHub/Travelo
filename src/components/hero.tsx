import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        className="w-full"
        src="/images/hero.jpg"
        alt="Hero Image"
        width={1522}
        height={1005}
      />
      <div className="absolute flex justify-between w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-52 h-4/6">
        <header className="flex flex-col items-start justify-center h-full max-w-lg gap-8 ">
          <h1 className="font-bold ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button>See Offer</button>
        </header>
        <div className="bg-red-500  w-96">Round Map</div>
      </div>
    </div>
  );
}
