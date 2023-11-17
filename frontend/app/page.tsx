import Image from "next/image";
import "@/app/globals.css";
import SignInForm from "@/components/form/SigninForm";

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center h-auto" style={{ minHeight: 'calc(100vh - 80px)' }}>
      <div className="flex flex-col items-center justify-center py-3 px-6 shadow-lg">
        <h1 className="text-2xl font-bold verde uppercase pb-8">Autogestión del personal</h1>
        <Image src="/logo-2.png" alt="Logo" width={100} height={100} />
        <SignInForm />
      </div>
    </div>
  );
}
