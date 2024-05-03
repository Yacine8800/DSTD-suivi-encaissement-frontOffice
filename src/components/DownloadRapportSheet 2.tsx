"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Icon } from "@iconify/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { axios } from "@/lib/axios";
import { API_URL } from "@/config/constants";
import OvalLoader from "./OvalLoader";

interface Item {
  name: string;
  size: string;
  report_type: string;
  is_archived: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  fileExists: boolean;
}

export default function DownloadRapportSheet() {
  const pathname = usePathname();
  const [visibleItems, setVisibleItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const TREOM_API = `${API_URL}api/v1/treom/`;
  const RTI_API = `${API_URL}api/v1/rti/`;
  const RER_API = `${API_URL}api/v1/rer/`;
  const TVA_API = `${API_URL}api/v1/tva/`;

  // Fonction pour charger les données
  const loadData = async () => {
    try {
      setIsLoading(true);

      let response;
      if (pathname === "/dashboard/tva") {
        response = await axios.get(`${TVA_API}reports`);
      } else if (pathname === "/dashboard/rti") {
        response = await axios.get(`${RTI_API}reports`);
      } else if (pathname === "/dashboard/rer") {
        response = await axios.get(`${RER_API}reports`);
      } else if (pathname === "/dashboard/treom") {
        response = await axios.get(`${TREOM_API}reports`);
      } else {
        response = { data: [] };
      }
      setVisibleItems(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des données", error);
    } finally {
      setIsLoading(false); // Fin du chargement
    }
  };

  const handleDownloadClick = async (filename: string) => {
    try {
      setIsLoading(true);

      let apiUrl = "";
      if (pathname === "/dashboard/tva") {
        apiUrl = `${TVA_API}download-pdf`;
      } else if (pathname === "/dashboard/treom") {
        apiUrl = `${TREOM_API}download-pdf`;
      } else if (pathname === "/dashboard/rer") {
        apiUrl = `${RER_API}download-pdf`;
      } else if (pathname === "/dashboard/rti") {
        apiUrl = `${RTI_API}download-pdf`;
      }

      if (apiUrl) {
        const response = await axios.get(apiUrl, {
          params: { filenames: filename },
          responseType: "blob",
        });

        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: "application/pdf" })
        );

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename); // Set the file name
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
      }
    } catch (error) {
      console.error("Erreur lors du téléchargement", error);
    } finally {
      setIsLoading(false); // Fin du chargement
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Icon
          icon="icon-park-solid:download-four"
          className="fixed bottom-10 right-10 h-[50px] w-[50px] bg-white hover:bg-[#EFEFEF] text-[#222222] font-bold py-2 px-4 -m-6 rounded-full shadow-lg z-10"
          onClick={loadData}
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex flex-row justify-start left-30 p-30 gap-[8px]">
            <Icon icon="octicon:download-16" className="h-[24px] w-[18px]" />
            {pathname === "/dashboard/tva" && "TVA rapports téléchargeables"}
            {pathname === "/dashboard/treom" &&
              "TREOM rapports téléchargeables"}
            {pathname === "/dashboard/rti" && "RTI rapports téléchargeables"}
            {pathname === "/dashboard/rer" && "RER rapports téléchargeables"}
          </SheetTitle>
        </SheetHeader>

        <div className=" max-h-full overflow-y-auto">
          {isLoading && (
            <OvalLoader
              title=""
              width="30"
              height="30"
              containerProps={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                paddingTop: "15px",
              }}
            />
          )}
          {!isLoading &&
            visibleItems?.map((item) => (
              <div
                key={item?.name}
                className="w-[98%] h-[50px] bg-[#F4F4F4] hover:bg-[#e4e4e7] flex gap-2 p-2 my-2 flex-row justify-start cursor-pointer"
                onClick={() => handleDownloadClick(item?.name)}
                title={`Cliquer pour télécharger le rapport : ${item?.name}`} // Message de survol ajouté ici
              >
                <div>
                  <Icon
                    icon="basil:file-download-solid"
                    className="h-[37px] w-[37px] hover:h-[35px] hover:w-[35px]"
                  />
                </div>
                <div>
                  <div className=" font-semibold text-sm">{item?.name}</div>
                  <div className=" font-normal text-xs text-[#414040]">
                    {item?.size}
                  </div>
                </div>
              </div>
            ))}

          {!setIsLoading && visibleItems?.length <= 0 && (
            <div className="flex justify-center text-[#737373] font-bold py-4">
              Aucun rapport disponible
            </div>
          )}

          {/* <div ref={observerRef} className="sentinelle" /> */}
        </div>
      </SheetContent>
    </Sheet>
  );
}
