"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { ErrorMessage } from "formik";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Flex } from "@/components/Flex";
import LoaderData from "@/components/loaderData";

export type ResetPasswordDTO = {
  otp: string;
  password: string;
  confirm_password?: string;
};

const validationSchema = Yup.object().shape({
  otp: Yup.string().required("Le code OTP est obligatoire"),
  password: Yup.string()
    .min(8, "Le mot de passe est trop court")
    .required("Le mot de passe est obligatoire"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Les mots de passe doivent correspondre")
    .required("La confirmation du mot de passe est obligatoire"),
});

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const formik = useFormik<ResetPasswordDTO>({
    initialValues: {
      otp: "",
      password: "",
      confirm_password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      router.push("/dashboard/encaissement");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid w-full max-w-sm items-center gap-1.5 py-2">
        <Label htmlFor="otp">Code OTP</Label>
        <Input
          type="text"
          id="otp"
          placeholder="OTP"
          {...formik.getFieldProps("otp")}
        />
        <ErrorMessage
          name="otp"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 py-2">
        <Label htmlFor="password">Mot de passe</Label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Mot de passe"
            {...formik.getFieldProps("password")}
          />
          <span
            className="cursor-pointer absolute inset-y-0 right-0 pr-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Icon icon={showPassword ? "mdi:eye-off" : "mdi:eye"} />
          </span>
        </div>
        <ErrorMessage
          name="password"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 py-3">
        <Label htmlFor="confirm_password">Confirmez le mot de passe</Label>
        <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm_password"
            placeholder="Confirmez le mot de passe"
            {...formik.getFieldProps("confirm_password")}
          />
          <span
            className="cursor-pointer absolute inset-y-0 right-0 pr-3"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Icon icon={showConfirmPassword ? "mdi:eye-off" : "mdi:eye"} />
          </span>
        </div>
        <ErrorMessage
          name="confirm_password"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <Button type="submit" className="w-full mt-6">
        Confirmer
      </Button>
      <Link href="/auth/reset_password">
        <a className="mt-20 text-[#f97316]"> Retour</a>
      </Link>
    </form>
  );
};

export default ResetPasswordForm;
