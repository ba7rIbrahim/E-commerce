import React from "react";
import Image from "next/image";

export const metadata = {
  title: "HEXASHOP | CONTACT US",
}

export default function Contact() {
  return (
    <div
      // style={{ height: "calc(100vh - 205px)" }}
      className=" lg:border-4 rounded-xl my-9 p-5"
    >
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-main to-main/25 font-bold text-4xl mt-4">
        Contact Us
      </h1>
      <div className="container h-full lg:flex gap-12 items-center">
        <div className="lg:flex items-center h-full hidden ">
          <Image src="/contact.svg" alt="" width={500} height={200} />
        </div>
        <div className="flex-1 bg-main p-4 rounded-md mt-12 lg:mt-0">
          <input
            required
            type="text"
            placeholder="Your name"
            className="w-full rounded bg-white text-black placeholder:text-[#444] text-sm outline-none p-2 my-2"
          />
          <input
            required
            type="Email"
            placeholder="Your email"
            className="w-full rounded bg-white text-black placeholder:text-[#444] text-sm outline-none p-2 my-2"
          />
          <input
            required
            type="text"
            placeholder="Subject"
            className="w-full rounded bg-white text-black placeholder:text-[#444] text-sm outline-none p-2 my-2"
          />
          <textarea
            placeholder="Message"
            required
            className="w-full rounded bg-white text-black placeholder:text-[#444] text-sm outline-none p-2 my-2 min-h-[50px]"
            onResize={false}
          />
          <button className="w-full font-semibold bg-white text-black p-2 rounded hover:border hover:bg-transparent hover:text-white duration-500 mt-5">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}
