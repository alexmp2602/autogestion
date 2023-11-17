import React from "react";
import { ModeToggle } from "@/components/Toggle";
import Image from "next/image";
import Link from "next/link";

function Headers() {
  return (
    <div className="flex justify-between items-center py-4 px-6 shadow-md">
      <Link href="/">
        <div className="flex items-center">
          <Image src="/logo-sistemas2.png" alt="Logo" width={76} height={76} />
        </div>
      </Link>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Headers;
