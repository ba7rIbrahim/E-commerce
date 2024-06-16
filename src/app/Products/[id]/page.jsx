import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "HEXASHOP | PRODUCT",
};

export default async function SinglePage({ params }) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const singleProduct = await response.json();

  return (
    <div className="my-9 lg:flex min-h-[72.5vh] ">
      <div className=" lg:w-1/3 lg:mt-20">
        <h1 className="font-bold text-4xl">{singleProduct.title}</h1>
        <p className=" text-base mt-4 ">{singleProduct.description}</p>

        <div>
          <div className="text-center mt-5 mb-0 px-5 ">
            <div className="flex items-center my-5 gap-4">
              {singleProduct.tags.map((ele, index) => {
                return (
                  <span
                    key={index}
                    className="bg-main text-white font-semibold py-1 px-2 rounded"
                  >
                    {ele}
                  </span>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mb-1">
              <del className=" font-bold text-xl">{singleProduct.price}$</del>
              <p className=" text-yellow-400 font-bold text-xl">
                {singleProduct.discountPercentage}$
              </p>
            </div>
            <span className="text-main font-bold text-lg uppercase block text-left mt-2">
              {singleProduct.brand} Brand
            </span>
          </div>
        </div>
      </div>

      <div className="lg:flex-1">
        <Image
          src={singleProduct.thumbnail}
          alt=""
          width={300}
          height={300}
          className="mt-[9px] lg:mt-0 my-5 mx-auto"
        />
        <div className="flex justify-center gap-5 flex-wrap">
          {singleProduct.images.map((img, index) => {
            
            return (
              <Link key={index} href={img}>
                <Image
                  key={singleProduct.id}
                  src={img}
                  alt=""
                  width={100}
                  height={100}
                  className="bg-main p-2 rounded-lg md:width-[150px] md:height-[150px]"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
