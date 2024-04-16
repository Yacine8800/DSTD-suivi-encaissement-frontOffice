"use client";

import React, { useState } from "react";
import { Fieldset } from "@/components/Fieldset";
import { Flex } from "@/components/Flex";
import FormProvider from "@/components/formik/FormProvider";
import LoaderData from "@/components/loaderData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { routes } from "@/config/routes";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: Yup.object({
      login: Yup.string().required("L'email est requis"),
      password: Yup.string().required("Le mot de passe est requis"),
    }),
    onSubmit: (values) => {
      // Logique de soumission du formulaire
      console.log(values);
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <FormProvider value={formik} onSubmit={formik.handleSubmit}>
        <div className="grid w-full max-w-sm gap-1.5 py-3">
          <Label htmlFor="login">Email</Label>
          <Input
            type="email"
            id="login"
            placeholder="Email / Matricule"
            name="login"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
          <Label htmlFor="password">Mot de passe</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Mot de passe"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Icon
                icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
        </div>

        <Link href={routes.auth.forgotPassword} className="text-[#4285F4]">
          Mot de passe oublié ?
        </Link>
        <Link href={routes.app.encaissement} className="text-[#4285F4]">
          <Flex css={{ justifyContent: "center" }}>
            <Button type="submit" className="w-full mt-10">
              Se connecter
            </Button>
          </Flex>
        </Link>
      </FormProvider>
    </div>
  );
}

export default LoginForm;
