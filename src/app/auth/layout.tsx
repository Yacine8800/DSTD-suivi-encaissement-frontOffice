"use client";

import AuthBackground from "@/layout/auth-layout/AuthBackground";
import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Provider store={store}>
      <AuthBackground>{children}</AuthBackground>
    </Provider>
  );
}
