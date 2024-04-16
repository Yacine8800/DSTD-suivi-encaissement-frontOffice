"use client";

import React, { ReactNode, useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";
import sidebarConfig from "./SidebarConfig";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";

type DashboardSidebarDto = {
  children: ReactNode;
  onTitleChange: any;
};

export default function DashboardSidebar({
  children,
  onTitleChange,
}: DashboardSidebarDto) {
  const [open, setOpen] = useState(true);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const router = useRouter();
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setIsOpen] = useState(isTabletMid ? false : true);

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  const handleItemClick = (item: any, index: number) => {
    onTitleChange(item?.module);
    setSelectedItemIndex(index);
  };

  console.log(selectedItemIndex);

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-[250px]" : "w-50 p-2"
        } bg-[#FFFFFF] h-screen p-3  pt-8 duration-300 border-r sticky border-spacing-500 overflow-y-auto`}
      >
        <Icon
          icon="line-md:close-to-menu-alt-transition"
          className={`absolute cursor-pointer -right-5 z-50 top-3 w-7 h-7  
           rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        {/* <Image
          alt=""
          src={``}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        /> */}
        <div className="flex text-center flex-col justify-center items-center gap-5 ">
          <Image
            src="/assets/logo/logo_cie.svg"
            alt="logo-cie"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            } h-[30px] w-[67.03px] `}
            height={5}
            width={10}
          />
          <span className="bg-[#EFEFEF] gap-10 h-1 w-[67.03px]" />
        </div>
        <ul className="pt-6">
          {sidebarConfig.map((item, index) => (
            <li
              key={index}
              className={`flex  rounded-[8px] p-4 ${
                open && "p-2"
              } cursor-pointer hover:bg-[#F3F3F3] text-sm items-center gap-x-[10px] ${
                selectedItemIndex === index &&
                "my-2 bg-[#F3F3F3] border-r-2 border-red-400"
              }`}
              onClick={() => {
                handleItemClick(item, index);
                router.push(item?.path);
              }}
            >
              <Image
                alt="icon"
                src={`${item.icon}`}
                className={` h-[24px] w-[24px] ${!open && "h-[44px] w-[44px]"}`}
                height={open ? 15 : 10}
                width={open ? 25 : 20}
              />
              <div className={`${!open && "hidden"} leading-[16px]`}>
                <div
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-[14px]`}
                >
                  {item.title}
                </div>
                <div
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-[10px]`}
                >
                  {item.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <>icon</>
      </div>
      <div className={`w-full overflow-y-auto`}>
        {/* <Sidebar /> */}
        {children}
      </div>
    </div>
  );
}
