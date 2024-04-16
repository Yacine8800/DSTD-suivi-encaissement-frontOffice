"use client";

import { useEffect } from "react";

interface RootErrorProps {
  error: Error;
  reset: () => void;
}
const RootError = ({ error, reset }: RootErrorProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <section className="w-full h-[100vh] flex flex-col items-center justify-start pt-10">
      <h1 className="font-bold text-3xl">Une erreur est survenue!</h1>
    </section>
  );
};

export default RootError;
