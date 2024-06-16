
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
const dancingScript = Dancing_Script({subsets: ["latin"]})

export default function Logo() {
  return (
    <Link href="/" className={`${dancingScript.className} text-2xl`}>HEXASHOP</Link>
  )
}
