"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage } from "formik";
import Link from "next/link";
import FormProvider from "@/components/formik/FormProvider";
import LoaderData from "@/components/loaderData";
import { Flex } from "@/components/Flex";

export type ForgotPasswordDto = {
  email: string;
};

const ForgotPasswordForm = () => {
  const formik = useFormik<ForgotPasswordDto>({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("L'email n'est pas valide")
        .required("L'email est requis"),
    }),
    onSubmit: (values) => {
      console.log(values);
      //   router.push(routes.auth.resetPassword);
    },
  });

  return (
    <FormProvider value={formik} onSubmit={formik.handleSubmit}>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5 py-3 my-20 -mt-10">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm items-start text-start"
          />
        </div>

        {formik.isSubmitting ? (
          <Flex css={{ justifyContent: "center" }}>
            <LoaderData />
          </Flex>
        ) : (
          <Button type="submit" className="w-full mt-16">
            Envoyer
          </Button>
        )}
      </form>

      <Link href="/auth/login">
        <span className="mt-20 text-[#f97316] cursor-pointer">
          Se connecter. <span className="text-[#4285F4]">Retour</span>
        </span>
      </Link>
    </FormProvider>
  );
};

export default ForgotPasswordForm;
