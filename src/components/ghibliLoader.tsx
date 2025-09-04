import Image from "next/image";
export default function GhibliLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full  opacity-30 bg-green-300 animate-ping"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Studio Ghibli Logo"
            width={100}
            height={100}
            className="animate-spin-slow"
          />
        </div>
      </div>
    </div>
  );
}
