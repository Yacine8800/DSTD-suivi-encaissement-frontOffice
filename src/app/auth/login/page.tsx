import LoginForm from "@/components/auth/login/LoginFrom";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col mb-10 items-center">
        <Image
          src="/assets/logo/logo_cie.svg"
          alt="logo-cie"
          width={130}
          height={50}
        />
        <h5 className="text-xl text-center">Suivi Encaissement</h5>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-[20px] w-96 max-[375px]:w-80 max-[375px]:p-6 max-[320px]:w-72 max-[320px]:p-4 p-8 py-10">
          <div className="flex flex-col justify-around h-full text-center">
            <div>
              <h3 className="text-2xl md:text-3xl">Connexion</h3>
              <p className="text-sm md:text-xs text-[#808080] mt-2">
                Saisissez vos informations de connexion <br /> pour accéder à
                votre espace
              </p>
            </div>
            <div className="mt-4 md:mt-8">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
