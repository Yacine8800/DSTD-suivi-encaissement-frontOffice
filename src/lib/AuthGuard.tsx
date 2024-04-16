"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { getCurrentUserInfo } from "@/utils/userinfo";
import Loader from "@/components/Loader";
import { TRootState } from "@/store";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();

  const currentUserInfo = {
    login: "doulifaye27@gmail.com",

    email: "doulifaye27@gmail.com",

    user: [
      {
        id: "1278e30c-c4bb-4f07-a448-7711104c5fcb",

        profil_id: "7a0316f1-18a8-4f71-b153-299170aedd6f",

        entreprise_id: "5d816cc9-ec58-49f2-a4d3-b9364631ef57",

        nom: "Diomande",

        prenoms: "Yacine",

        email: "doulifaye27@gmail.com",

        matricule: "1234A",

        numero: "+2250788007929",
      },
    ],
  };

  const [isLoading, setIsLoading] = useState(true);

  console.log(currentUserInfo);

  useEffect(() => {
    // Simuler le chargement des données de l'utilisateur
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 secondes de chargement fictif

    if (!currentUserInfo) {
      window.location.href = "/auth/login";
    }
  }, [currentUserInfo, router]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  // if (!currentUserInfo) {
  //   return null;
  // }

  return <>{children}</>;
};

export default AuthGuard;
