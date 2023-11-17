"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const SignInForm = () => {
  const [isClient, setIsClient] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  function toggleAccordion(n: string) {
    const body = document.getElementById("accordion-body"+n);
    if (body) {
      if (body.style.maxHeight) {
        body.style.maxHeight = "";
      } else {
        body.style.maxHeight = body.scrollHeight + "px";
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-3/3 space-y-1 justify-center flex flex-col items-center h-full box-shadow-custom"
      >
        <div className="gap-5 py-5 w-full flex flex-col items-center px-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="username"
                    placeholder="Usuario"
                    {...field}
                    autoComplete="username"
                    className="border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 focus:ring-0 focus:border-gray-500"
                  />
                </FormControl>

                <FormControl>
                  <Input
                    id="password"
                    placeholder="Contraseña"
                    autoComplete="contraseña"
                    className="border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 focus:ring-0 focus:border-gray-500"
                  />
                </FormControl>

                <FormDescription className="text-center">
                  <div className="w-full max-w-xs py-2 mx-auto bg-white rounded-2xl">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => toggleAccordion('1')}
                    >
                      <h2 className="flex-grow text-gray-700">
                        Primera vez que accedo
                      </h2>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                    <div
                      className="overflow-hidden transition-max-height duration-500 ease-in-out max-h-0"
                      id="accordion-body1"
                    >
                      <p className="py-2 text-gray-500">
                        Si es la primera vez que accede, por favor ponga su
                        numero de legajo en la clave de acceso, y el sistema le
                        solicitara que cree una clave para futuros accesos
                      </p>
                    </div>
                  </div>
                </FormDescription>

                <div className="text-center">
                  <div className={buttonVariants()}>
                    <Link
                      className="px-4 py-2 my-4 border border-transparent text-sm font-medium rounded-md text-white bg-verde-oscuro hover:bg-green-700"
                      href="/sign-in"
                    >
                      Acceder
                    </Link>
                  </div>
                </div>

                <FormDescription className="text-center">
                  <div className="w-full max-w-xs py-2 mx-auto bg-white rounded-2xl">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => toggleAccordion('2')}
                    >
                      <h2 className="flex-grow text-gray-700">
                        No recuerdo la clave
                      </h2>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                    <div
                      className="overflow-hidden transition-max-height duration-500 ease-in-out max-h-0 bg-blue-100"
                      id="accordion-body2"
                    >
                      <p className="py-2 text-gray-500">
                      Tendra que solicitar un blanqueo de la misma en la oficina de Recursos Humanos del municipio
                      </p>
                    </div>
                  </div>
                </FormDescription>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};
export default SignInForm;
