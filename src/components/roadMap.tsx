import Image from "next/image";
import Button from "./button";
import { RoadMapItems } from "@/assets/roadMapItems";

export default function RoadMap() {
  return (
    <div className="rounded-md w-96 backdrop-blur-[3px] bg-white/10 justify-between py-12 px-4 flex-col hidden lg:flex">
      <h2 className="ml-6 text-xl">Road Map</h2>
      {RoadMapItems.map(({ icon, title, description }) => (
        <>
          <div className="flex w-full h-24 gap-4 px-2 py-2 rounded-md bg-black/60">
            <Image
              className="w-auto h-full p-4"
              src={icon}
              alt="Hero Image"
              width={32}
              height={32}
            />
            <div className="flex flex-col items-start justify-center gap-1">
              <h3 className="font-bold">{title}</h3>
              <p className="text-sm text-slate-200">{description}</p>
            </div>
          </div>
        </>
      ))}
      <span className="ml-6">
        <Button>Book Night</Button>
      </span>
    </div>
  );
}
