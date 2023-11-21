import Image from "next/image";
import "@/app/globals.css";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-row items-center justify-center h-auto"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="flex flex-col items-center justify-center py-3 px-6 shadow-lg gris-oscuro">
        <h4>¡Bienvenido "{"name"}"!</h4>
        <Image
          src="/LOGO-AVATARMEN.png"
          alt=""
          width={100}
          height={100}
          className="py-4"
        />
        <h4>Legajo: (Número legajo)</h4>
        <h1>Sistema de autogestión</h1>
        <div className="py-8">
          <div className={buttonVariants()}>
            <Link
              className="w-full flex flex-row justify-around gap-28 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-verde-oscuro hover:bg-green-700"
              href="/dashboard"
            >
              Recibos <Image src="/Recibos.svg" alt="" width={20} height={20} className="h-6"/>
            </Link>
          </div>
          <div className={buttonVariants()}>
            <Link
              className="w-full flex flex-row justify-around gap-28 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-verde-oscuro hover:bg-green-700"
              href="/dashboard/"
            >
              Asistencias <Image src="/Asistencias.svg" alt="" width={20} height={20} className="h-6"/>
            </Link>
          </div>
          <div className={buttonVariants()}>
            <Link
              className="w-full flex flex-row justify-around gap-28 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-verde-oscuro hover:bg-green-700"
              href="/dashboard"
            >
              Compensatorios <Image src="/Compensatorios.svg" alt="" width={20} height={20} className="h-6"/>
            </Link>
          </div>
        </div>

        <div className="w-full">
          <hr className="w-5/6 h-0.5 mx-auto my-8 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        </div>
        <div className="text-center">
          <p>
            En esta página los empleados de la Municipalidad de Mercedes, podrán
            consultar sus recibos de sueldos como asi también otros temas de
            interés.
          </p>
          <p>
            Si tiene dudas, puede consultar la sección de Preguntas frecuentes
          </p>
          <p>Si necesita informar algo puede dirigirse a la sección Contacto</p>
        </div>
      </div>
    </div>
  );
}
