import Image from "next/image";
import Button from "./button";
import { RoadMapItems } from "@/assets/roadMapItems";

export default function RoadMap() {
  return (
    <div className="rounded-md w-96 backdrop-blur-[3px] bg-white/10 flex justify-between py-12 px-4 flex-col">
      <h2 className="ml-6 text-xl">RoudMap</h2>
      {RoadMapItems.map(() => (
        <>
          <div className="flex w-full h-24 gap-4 px-2 py-2 rounded-md bg-black/60">
            <Image
              className="object-cover w-auto h-full rounded-full aspect-square"
              src="/images/hero.jpg"
              alt="Hero Image"
              width={1522}
              height={1005}
            />
            <div className="flex flex-col items-start justify-center gap-1">
              <h3 className="font-bold">Lorem Ipsum</h3>
              <p className="text-slate-200">Lorem ipsum dolor sit amet</p>
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
