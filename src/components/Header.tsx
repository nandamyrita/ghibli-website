
import Image from "next/image";
export default function Header() {
  return (
    <header className=" ml-10 text-white p-4 flex justify-between items-center">
        <Image src="/logo.svg" alt="Logo" width={150} height={100} />
      
      

    </header>
  )
}