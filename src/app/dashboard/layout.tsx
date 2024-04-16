"use client";

import MainNavbar from "@/layout/dashboard-layout/mainNavbar";
import Sidebar from "@/layout/dashboard-layout/sidebar/Sidebar";
import AuthGuard from "@/lib/AuthGuard";
import { store } from "@/store";
import React, { ReactNode, useState } from "react";
import { Provider, useDispatch } from "react-redux";

type DashboardLayoutDTO = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutDTO) {
  const [sessionTitle, setSessionTitle] = useState(
    "ENCAISSEMENT • DESCRIPTION"
  );

  return (
    <Provider store={store}>
      <AuthGuard>
        <Sidebar onTitleChange={setSessionTitle}>
          <div className="h-screen flex-1 overflow-y-auto">
            <MainNavbar sessionTitle={sessionTitle} />
            {children}
          </div>
        </Sidebar>
      </AuthGuard>
    </Provider>
  );
}
