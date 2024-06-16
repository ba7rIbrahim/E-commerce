import Link from 'next/link';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const social = [
  {
    id: 1,
    element: <FaFacebookF />,
    src: "https://facebook.com",
  }, 
  {
    id:2,
    element: <FaLinkedinIn />,
    src: "https://linkedin.com"
  }
]

export default function Footer() {
  return (
    <div className='flex justify-between items-center pt-1 pb-4'>
      <p className=' font-medium text-sm'>©2024  Hexashop, All Right Reserved</p>
      <div className='flex gap-3'>
        {social.map((item) => {
          return <Link href={item.src} key={item.id} className='text-main text-xl'>{item.element}</Link>
        }) }
      </div>
    </div>
  )
}
