import React from "react";
import { ModeToggle } from "@/components/Toggle";
import Image from "next/image";

function Headers() {
  return (
    <div className="flex justify-between items-center py-4 px-6">
      <div className="flex items-center">
        <Image src="/logo-2.png" alt="Logo" className="h-8" width={35} height={40}/>
        <h1 className="ml-2 text-xl font-bold">Autogestión</h1>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Headers;
