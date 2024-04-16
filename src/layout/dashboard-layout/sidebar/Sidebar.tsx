import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { routes } from "@/config/routes";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

type DashboardSidebarDto = {
  children: ReactNode;
  onTitleChange: any;
};

const Sidebar = ({ onTitleChange, children }: DashboardSidebarDto) => {
  const isTabletMid = useMediaQuery({ query: "(max-width: 860px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1060px)" });

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [open, setOpen] = useState(!isMobile);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(!isMobile);
    }
  }, [isTabletMid, isMobile]);

  const handleItemClick = (
    item: { path: string; module: any },
    index: number
  ) => {
    onTitleChange(item?.module);
    setSelectedItemIndex(index);
    router.push(item.path);
  };

  const Nav_animation = {
    open: {
      width: isTabletMid ? "18rem" : "16rem",
      transition: { damping: 40 },
    },
    closed: {
      width: isTabletMid ? 0 : "4.5rem",
      transition: { damping: 40, delay: isTabletMid ? 0.15 : 0 },
    },
  };

  const sidebarMenu = [
    {
      title: "TABLEAU DE BORD",
      description: "description",
      module: "DESCRIPTION • TABLEAU DE BORD",
      icon: "/assets/icon/treom_icon.svg",
      path: routes.app.tableaudebord,
    },
    {
      title: "Encaissement",
      description: "description",
      module: "DESCRIPTION • ENCAISSEMENT",
      icon: "/assets/icon/tva_icon.svg",
      path: routes.app.encaissement,
    },
  ];

  useEffect(() => {
    const matchingIndex = sidebarMenu.findIndex((item) =>
      pathname.includes(item.path)
    );
    if (matchingIndex !== -1) {
      setSelectedItemIndex(matchingIndex);
    }
  }, [pathname, sidebarMenu]);

  return (
    <div className="flex">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 h-0 z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        }`}
      ></div>
      <motion.div
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className={`${
          open ? "w-[250px]" : "w-20 p-2 px-0"
        } bg-[#FFFFFF] h-screen p-3 pt-8 duration-50 border-r sticky border-spacing-500 overflow-y-auto`}
      >
        <div className="flex flex-col h-full">
          {open === true && !isTabletMid && (
            <Icon
              icon="line-md:close-to-menu-alt-transition"
              className={`${
                isTabletMid ? " left-36" : "left-48"
              } absolute cursor-pointer left-44 top-1 w-5 h-5 rounded-full ${
                !open && "rotate-180 absolute top-1 w-5 h-5 hidden"
              }`}
              onClick={() => setOpen(!open)}
            />
          )}
          {!open && (
            <Icon
              icon="line-md:close-to-menu-alt-transition"
              className="w-5 h-5 top-0 cursor-pointer absolute left-6 rounded-full"
              onClick={() => setOpen(!open)}
            />
          )}
          <div className="flex text-center flex-col justify-center items-center gap-5 mx-1">
            <Image
              src="/assets/logo/logo_cie.svg"
              alt="logo-cie"
              className={`cursor-pointer duration-150 ${
                open && "rotate-[360deg]"
              } h-[30px] w-[67.03px]`}
              height={5}
              width={10}
            />
            <p className="text-[#EF7D00] text-[12px] font-normal">
              Suivi Encaissement
            </p>
            <span className="bg-[#EFEFEF] gap-10 h-1 w-[67.03px] mx-1" />
          </div>
          <ul className="pt-6">
            {sidebarMenu.map((item, index) => (
              <li
                key={index}
                className={`flex justify-between rounded-[8px] px-4 mx-1 pr-0 py-2 ${
                  open && "p-2"
                } cursor-pointer hover:bg-[#F3F3F3] py-2 text-sm items-center ${
                  selectedItemIndex === index && "my-2 bg-[#F3F3F3]"
                }`}
                onClick={() => handleItemClick(item, index)}
              >
                <div className="gap-x-[6px] flex py-2">
                  <Image
                    alt="icon"
                    src={`${item.icon}`}
                    className={`h-[24px] w-[24px] ${
                      !open && "h-[24px] w-[24px]"
                    }`}
                    height={open ? 14 : 14}
                    width={open ? 24 : 10}
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
                </div>
                {selectedItemIndex === index && (
                  <span className="bg-[#EF7D00] h-[45px] w-[6px] rounded-md" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      <div className="w-full overflow-y-auto">
        <div className="m-3 md:hidden  z-50" onClick={() => setOpen(!open)}>
          <Icon
            icon="vaadin:menu"
            className="h-[16px] w-[16px] cursor-pointer"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
