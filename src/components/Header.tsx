import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header className=" ml-10 text-white p-4 flex justify-between items-center">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      
      

    </header>
  )
}