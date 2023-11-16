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

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-3/3 space-y-1 justify-center flex flex-col items-center h-full box-shadow-custom" // Agrega la clase box-shadow-custom
      >
        <div className="uppercase text-[color] text-4xl font-bold tracking-wide"></div>
        <div className="gap-5 py-5 w-full flex flex-col items-center shadow-md px-5">
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
                  <Link className="text-sm text-blue-500" href="/">
                    Primera vez que accedo
                  </Link>
                  <div className="text-center">
                    <Link className="text-sm text-blue-500" href="/">
                    No recuerdo la clave
                    </Link>
                  </div>
                </FormDescription>
                <FormMessage />
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
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};
export default SignInForm;
