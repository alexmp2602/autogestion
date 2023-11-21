import React from "react";
import { ModeToggle } from "@/components/Toggle";
import Image from "next/image";
import Link from "next/link";

function Headers() {
  return (
    <div className="flex justify-between items-center py-4 px-6 shadow-md">
      <div className="flex items-center">
        <Link rel="icon" href="/">
        <Image src="/logo-sistemas2.png" alt="Logo" className="h-8" width={70} height={70}/>
        </Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Headers;
