import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <div
      // style={{ height: "calc(100vh - 181px)" }}
      className="mt-12 text-center flex  justify-center lg:justify-between items-center gap-5 pb-12 min-h-max "
    >
      <div className="lg:w-[40%] lg:text-left">
        <h1 className="text-main font-bold text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-main to-main/25">
          YOUR BEST ONLINE SHOP DESTINATION
        </h1>
        <p className="my-7 text-base font-light">
          Discover a world of endless shopping possibilities at our online
          store. Browse, Choses, and order your favorite products from the
          comfort of your home.
        </p>
        <button className="bg-main p-3 rounded font-semibold hover hover:opacity-90">
          SHOP NOW
        </button>
      </div>
      <div className="hidden lg:block flex-1 lg:h-[400px]">
        <Image
          src="/Hero.svg"
          width={100}
          height={100}
          alt=""
          className="hidden lg:block w-full max-h-[80%]"
        />
      </div>
    </div>
  );
}
