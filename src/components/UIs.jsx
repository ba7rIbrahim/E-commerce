import Link from "next/link";
import React from "react";

export default function Uls() {
  
  const links = [
    {
      id: 1,
      title: "home",
      src: "/",
    },
    {
      id: 2,
      title: "About",
      src: "/About",
    },
    {
      id: 3,
      title: "Products",
      src: "/Products",
    },
    {
      id: 4,
      title: "Contact",
      src: "/Contact",
    },
  ];

  return (
    <div className="flex gap-5 md:mr-7">
      {links.map((link) => {
        return (
          <Link key={link.id} href={link.src}>{link.title}</Link>
          );
      })}
      
    </div>
  );
}
