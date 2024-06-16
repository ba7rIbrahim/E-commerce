import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "HEXASHOP | PRODUCTS",
};

export default async function Products() {
  const response = await fetch("https://dummyjson.com/products");
  const result = await response.json();

  return (
    <div className="my-10 ">
      <h1 className="text-main font-bold text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-main to-main/25">
        Products
      </h1>
      <div className="text-center my-9 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {result.products.map((product, index) => {
          return (
            <div
              key={product.id}
              className="bg-main rounded-lg p-4 w-full shadow-lg md:my-0 my-5 h-[500px]"
            >
              <Link href={`/Products/${product.id}`} className="flex flex-col h-full">
                <Image
                  src={product.thumbnail}
                  alt=""
                  width={250}
                  height={100}
                  className="mx-auto max-h-full h-[170px] mb-5 flex-1"
                />
                <div className="max-h-1/2">

                    <h2 className="font-bold text-black text-xl">{product.title}</h2>
                    <p className="text-sm font-light text-gray-200  mt-3">
                      {product.description}
                    </p>
                  <div className="flex justify-between items-center mt-5 mb-7 px-5">
                    <del className="text-gray-900 font-bold text-xl">{product.price}$</del>
                    <p className=" text-yellow-400 font-bold text-xl">{product.discountPercentage}$</p>
                  </div>
                    <span className="bg-white text-black p-1 rounded w-full block">{product.category}</span>
                </div>

              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
