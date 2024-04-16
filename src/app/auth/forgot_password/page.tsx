import React from "react";
import Image from "next/image";
import ForgotPasswordForm from "@/components/auth/forgot_password/ForgotPasswordFrom";

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col mb-10 item-center">
        <Image
          src="/assets/logo/logo_cie.svg"
          alt="logo-cie"
          width={130}
          height={50}
          className="ml-5"
        />
        <h5 className="text-xl text-center">Suivi Encaissement</h5>
      </div>
      <div className="flex justify-between">
        <div className="bg-white shadow-lg rounded-[20px] w-96 max-[375px]:w-80 max-[375px]:p-6 max-[320px]:w-72 max-[320px]:p-4 p-8 py-5">
          <div className="flex flex-col h-full text-center">
            <div>
              <h3 className="text-2xl md:text-3xl">Rénitialisation</h3>
              <p className="text-sm md:text-xs text-[#808080] mt-2">
                Saisissez votre email pour <br /> la rénitialisation de votre
                mot de passe
              </p>
            </div>
            <div className="mt-20">
              <ForgotPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
