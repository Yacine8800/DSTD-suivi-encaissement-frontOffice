import React from "react";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

const AuthBackground = ({ children }: Props) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
      // backgroundImage: `url(/assets/images/element.svg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "95vh",
      position: "relative",
    }}
  >
    <div className="flex items-center justify-center h-full">{children}</div>
    <div className="flex items-center justify-center p-2">
      <p className="text-xs">© Tous droits réservés -</p>
      <Image
        src="/assets/logo/logo_cie.svg"
        alt="logo-cie"
        width={50}
        height={13}
      />
    </div>
  </div>
);

export default AuthBackground;
