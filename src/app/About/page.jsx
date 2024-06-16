import React from "react";

export const metadata = {
  title: "HEXASHOP | ABOUT"
}

export default function About() {
  return (
    <div className="py-9">
      <div className="container">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-main to-main/25 font-bold text-4xl mt-4 mb-6">
          Welcome to HEXASHOP
        </h1>
        <p className=" lg:w-[70%]">
          At HEXASHOP, we are dedicated to bringing you a diverse selection of
          high-quality products at unbeatable prices. Our mission is to make
          online shopping an easy, enjoyable, and reliable experience for
          everyone.
        </p>
        <div className="mt-16">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-main to-main/25 font-bold text-2xl mb-4">
            How We Are ?
          </h2>
          <p className=" text-sm lg:w-[70%]">
            Founded in 2024, HEXASHOP started with a simple idea: to create a
            platform where people can find everything they need in one place.
            From the latest fashion trends to cutting-edge electronics, home
            essentials, and more, we are your one-stop shop for all your
            shopping needs
          </p>
        </div>
        <div className="mt-12">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-main to-main/25 font-bold text-2xl mb-4">
            Why Shop With Us ?
          </h2>
          <p className=" text-sm lg:w-[70%]">
            Our products are carefully selected from trusted suppliers to ensure
            that you always receive the best. We understand that quality should
            not come at the expense of price, so we offer competitive prices and
            frequent promotions to make sure you get the best deals. Our
            inventory is continuously updated with the latest and greatest
            products, keeping you at the forefront of trends and technology.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-main to-main/25 font-bold text-2xl mb-4">
            Join Our Community
          </h2>
          <p className=" text-sm lg:w-[70%]">
            We are more than just a store; we are a community of passionate
            shoppers and trendsetters. We invite you to join our community and
            follow us on social media to stay updated on the latest products,
            special offers, and more. We love hearing from our customers and
            welcome any feedback or suggestions you may have.
          </p>
        </div>
        <p className="text-main text-base mt-20">
          Thank you for choosing HEXASHOP. We look forward to serving you and
          making your shopping experience exceptional.
        </p>
      </div>
    </div>
  );
}
