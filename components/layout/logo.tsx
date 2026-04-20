// import { cn } from "@/lib/utils";
// import Link from "next/link";
// interface Props {
//   styles?: string;
//   width?: string;
// }

// export const Logo = ({ width = "w-[100px]", styles }: Props) => {
//   return (
//     <Link href="/" className={cn("inline-block", styles)}>
//       <img src="/logo.png" alt="logo" className={cn("h-auto", width)} />
//     </Link>
//   );
// };

// export const LogoWhite = ({ width = "w-[100px]", styles }: Props) => {
//   return (
//     <Link href="/" className={cn("inline-block", styles)}>
//       <img src="/logowhite.png" alt="logo" className={cn("h-auto", width)} />
//     </Link>
//   );
// };

import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { HardHat } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

interface Props {
  styles?: string;
}

export const Logo = ({ styles }: Props) => {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-x-1 p-[1px] rounded-lg", styles)}
    >
      <div className="bg-blue-600 p-2 rounded-full">
        <HardHat className="size-6 text-white -translate-y-[2px]" />
      </div>
      <p className={cn("font-semibold text-xl", font.className)}>Mukhafa</p>
    </Link>
  );
};
export const LogoWhite = ({ styles }: Props) => {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-x-1 p-[1px] rounded-lg", styles)}
    >
      <Image src="/logo-white.png" height="32" width="32" alt="Logo" />
      <p className={cn("font-semibold text-xl text-white", font.className)}>
        Mukhafa
      </p>
    </Link>
  );
};
