import React from "react";
import Image from "next/image";
import ResetPasswordForm from "@/components/auth/reset_password/ResetPasswordFrom";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col mb-10 item-center">
        <Image
          src="/assets/logo/logo_cie.svg"
          alt="logo-cie"
          width={130}
          height={50}
        />
        <h5 className="text-xl text-center">Suivi Encaissement</h5>
      </div>
      <div className="flex justify-between">
        <div className="bg-white shadow-lg rounded-[20px] w-96 max-[375px]:w-80 max-[375px]:p-6 max-[320px]:w-72 max-[320px]:p-4 p-8 py-5">
          <div className="flex flex-col justify-between h-full text-center">
            <div>
              <h3 className="text-3xl -mt-2">Confirmation de compte</h3>
              <p className="text-sm md:text-xs text-[#808080] mt-2">
                Saisissez le code otp et votre mot de passe <br /> pour
                rénitialiser votre mot de passe
              </p>
            </div>
            <div className="mt-1">
              <ResetPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
