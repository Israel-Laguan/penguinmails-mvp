import Link from "next/link";
import Penguin from "@/assets/pengo_48X48.png";
import Image from "next/image";
export const Logo = () => (
  <Link
    href={"/"}
    className="flex items-center gap-1  justify-center max-h-8 max-w-48 text-gray-900 hover:text-gray-700 transition-colors duration-200"
  >
    <>
      <div className="relative min-h-8 min-w-8">
        <Image
          src={Penguin}
          alt="PenguinMails Logo"
          fill
          className="object-contain"
        />
      </div>
      <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
        PenguinMails
      </h1>
    </>
  </Link>
);
