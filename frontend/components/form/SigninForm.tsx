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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "El nombre de usuario debe tener al menos 2 caracteres",
  }),
});

const SignInForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
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

  const toggleAccordion = (id: string) => {
    const body = document.getElementById(`accordion-body${id}`);
    if (body) {
      if (body.style.maxHeight) {
        body.style.maxHeight = '';
        if (id === "1") {
          setIsOpen1(false);
        } else if (id === "2") {
          setIsOpen2(false);
        }
      } else {
        body.style.maxHeight = body.scrollHeight + 'px';
        if (id === "1") {
          setIsOpen1(true);
        } else if (id === "2") {
          setIsOpen2(true);
        }
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-3/3 space-y-1 justify-center flex flex-col items-center h-full box-shadow-custom dark:border-white"
      >
        <div className="gap-5 w-full flex flex-col items-center px-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="username"
                    placeholder="Número de documento"
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
                  <div className="w-full max-w-xs py-2 mx-auto rounded-2xl">
                    <div
                      className="cursor-pointer transform transition-transform duration-500 hover:scale-105"
                      onClick={() => toggleAccordion("1")}
                    >
                      <h2 className="flex-grow">
                        Primera vez que accedo{" "}
                        <FontAwesomeIcon icon={isOpen1 ? faChevronUp : faChevronDown} />
                      </h2>
                    </div>
                    <div
                      className="overflow-hidden transition-max-height duration-500 ease-in-out max-h-0"
                      id="accordion-body1"
                    >
                      <p className="py-3">
                        Si es tu primera vez, usa tu número de legajo como clave
                        de acceso. El sistema te pedirá que crees una contraseña
                        para futuros ingresos.
                      </p>
                    </div>
                  </div>
                </FormDescription>

                <div className="text-center">
                  <div className={buttonVariants()}>
                    <Link
                      className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-verde-oscuro hover:bg-green-700"
                      href="/sign-in"
                    >
                      Acceder
                    </Link>
                  </div>
                </div>

                <FormDescription className="text-center">
                  <div className="w-full max-w-xs py-2 mx-auto rounded-2xl">
                    <div
                      className="cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:.verde-oscuro"
                      onClick={() => toggleAccordion("2")}
                    >
                      <h2 className="flex-grow">
                        No recuerdo la clave{" "}
                        <FontAwesomeIcon icon={isOpen2 ? faChevronUp : faChevronDown} />
                      </h2>
                    </div>
                    <div
                      className="overflow-hidden transition-max-height duration-500 ease-in-out max-h-0"
                      id="accordion-body2"
                    >
                      <p className="py-3">
                        Tendra que solicitar un blanqueo de la misma en la
                        oficina de Recursos Humanos del municipio
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
