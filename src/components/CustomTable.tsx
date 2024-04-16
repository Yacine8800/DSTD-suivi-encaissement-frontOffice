"use client";

import React, { useState } from "react";
import Image from "next/image";
import expandsOffIcon from "../../public/assets/svg/extendsOff.svg";
import expandsIcon from "../../public/assets/svg/extends.svg";
import LinearWithValueLabel from "./progressBar/progressBar";

interface AliasMapping {
  [key: string]: string;
}

interface WidthMapping {
  [key: string]: string;
}

interface Role {
  nom: string;
}

interface Data {
  nom: string;
  prenom: string;
  email: string;
  matricule: string;
  entreprise: string;
  roles: Role[];
  action: string;
}

interface DataSuivEnc {
  dateEnc: string;
  caisseMode: string;
  banque: string;
  montantCaisse: number;
  montantBordereau: number;
  dateCloture: string;
  bordereau: string;
  ecart: number;
  dateRev: string;
  montantRev: number;
}

const ALIAS_MAPPING_SUIV_ENC: AliasMapping = {
  dateEnc: "Date Encais.",
  caisseMode: "Caisse mode",
  banque: "Banque",
  montantCaisse: "Montant caisse",
  montantBordereau: "Montant bordereau",
  dateCloture: "Date cloture",
  bordereau: "Bordereau",
  ecart: "Ecart",
  dateRev: "Date revelé",
  montantRev: "Montant revelé",
  role: "Role",
};

const WIDTH_MAPPING_SUIV_ENC: any = {
  dateEnc: "10%",
  caisseMode: "10%",
  banque: "10%",
  montantCaisse: "10%",
  montantBordereau: "10%",
  dateCloture: "10%",
  bordereau: "10%",
  ecart: "10%",
  dateRev: "10%",
  montantRev: "10%",
  role: "10%",
};

const DEFAULT_VALUE = "N/A";

const manageAlias = (text: string): string =>
  ALIAS_MAPPING_SUIV_ENC[text] || text;
const aliasWidth = (text: string): string =>
  WIDTH_MAPPING_SUIV_ENC[text] || "100%";

const DataSuivEnc: DataSuivEnc[] = [
  {
    dateEnc: "03/12/2024",
    caisseMode: "2 -1 Espece",
    banque: "NSIA 521575",
    montantCaisse: 2266965,
    montantBordereau: 2266965,
    dateCloture: "03/12/2024",
    bordereau: "N°120831",
    ecart: 0,
    dateRev: "04/04/2023",
    montantRev: 2266695,
  },
  {
    dateEnc: "03/12/2018",
    caisseMode: "2 -1 Espece",
    banque: "NSIA 521575",
    montantCaisse: 2266965,
    montantBordereau: 2266965,
    dateCloture: "03/12/2018",
    bordereau: "N°120831",
    ecart: 0,
    dateRev: "04/04/2023",
    montantRev: 2266695,
  },
];

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false); // Ajout de l'état pour suivre l'expansion du tableau

  const itemsPerPage = 5;
  const totalPages = Math.ceil(DataSuivEnc.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = DataSuivEnc.slice(indexOfFirstItem, indexOfLastItem);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded); // Inverse l'état de l'expansion
  };
  return (
    <>
      <div className=" flex justify-center items-center min-h-screen">
        <div
          className={
            isExpanded ? "absolute top-0 left-0 w-full items-start" : ""
          }
          style={
            isExpanded
              ? { width: "100%", height: "100%", backgroundColor: "white" }
              : { width: "1300px" }
          }
        >
          <div
            className="flex flex-grow justify-between items-center"
            style={
              isExpanded
                ? { width: "100%", marginTop: "80px" }
                : { width: "100%" }
            }
          >
            <div>
              <label className="text-black text-[16px] font-thin ml-1 font-sans">
                <span className="font-semibold text-[17px]">12</span>{" "}
                Utilisateurs
              </label>
            </div>
            <nav className="mb-2 flex space-x-2 sm:space-x-4 justify-end">
              {currentPage > 1 && (
                <a
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="rounded-lg items-center justify-start bg-[#F3F2F1] px-1 py-1 text-xs sm:px-2 sm:py-2 text-black cursor-pointer"
                >
                  <Image
                    src={"/svg/precedent.svg"}
                    alt="Previous"
                    width={10}
                    height={10}
                  />
                </a>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <a
                    onClick={() => setCurrentPage(page)}
                    className={`rounded-lg px-2 py-1 text-xs sm:px-4 sm:py-2 cursor-pointer ${
                      currentPage === page
                        ? "bg-[#555555] text-white"
                        : "border-teal-500 text-gray-700"
                    }`}
                    key={page}
                  >
                    {page}
                  </a>
                )
              )}
              <div
                className="flex justify-end mt-1"
                style={{ marginRight: "10px" }}
              >
                {isExpanded ? (
                  <button
                    onClick={toggleExpansion}
                    className="focus:outline-none"
                  >
                    <Image src={expandsOffIcon} alt="" />
                  </button>
                ) : (
                  <button
                    onClick={toggleExpansion}
                    className="focus:outline-none"
                  >
                    <Image src={expandsIcon} alt="" />
                  </button>
                )}
              </div>
              {currentPage < totalPages && (
                <a
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="rounded-lg bg-[#F3F2F1] items-center justify-start px-1 py-1 text-xs sm:px-2 sm:py-2 text-gray-700 cursor-pointer"
                >
                  <Image
                    src={"/svg/suivant.svg"}
                    alt="Next"
                    width={10}
                    height={10}
                  />
                </a>
              )}
            </nav>
          </div>
          <div
            className={
              isExpanded
                ? "flex mt-[30px] flex-col gap-1 w-full sticky overflow-auto"
                : "flex mt-[50px] flex-col gap-1 sticky overflow-auto"
            }
          >
            <div className="flex w-full rounded-[10px] bg-[#F3F2F1] items-center gap-1 p-1 sticky mb-1 top-0 z-10">
              {Object.keys(ALIAS_MAPPING_SUIV_ENC).map((key) => (
                <div
                  className="text-black flex items-center justify-start h-14 font-bold relative text-sm"
                  style={{ width: aliasWidth(key) }}
                  key={key}
                >
                  {manageAlias(key)}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1 w-full h-112 overflow-auto">
              {currentItems.map((row, index) => (
                <div
                  className="flex items-center h-14 p-1.25 mb-1 bg-gray-100 hover:bg-gray-300 cursor-pointer rounded-[10px] gap-1 text-black text-[12px]"
                  key={index}
                >
                  <div
                    className="flex items-center justify-start h-full"
                    style={{ width: aliasWidth("Date encais.") }}
                  >
                    <div className="flex flex-col justify-start  ml-2">
                      <span className="text-gray-700">{row.dateEnc}</span>
                      {/* <span className="text-gray-400">{row.prenom}</span> */}
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-start h-full"
                    style={{ width: aliasWidth("Caisse mode") }}
                  >
                    <div className="flex flex-col justify-center ml-2">
                      <div>
                        {row.caisseMode.split(" ")[0]}{" "}
                        {row.caisseMode.split(" ")[1]}
                      </div>{" "}
                      <div>{row.caisseMode.split(" ")[2]}</div>{" "}
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-start h-full"
                    style={{ width: aliasWidth("Banque") }}
                  >
                    <div className="flex flex-col justify-center ml-2">
                      <div>
                        <strong>{row.banque.split(" ")[0]}</strong>
                      </div>{" "}
                      <div>{row.banque.split(" ")[1]}</div>{" "}
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-start h-full"
                    style={{ width: aliasWidth("Montant caisse") }}
                  >
                    <strong>{row.montantCaisse.toLocaleString()} FCFA</strong>
                  </div>
                  <div
                    className="flex items-center justify-start h-full"
                    style={{ width: aliasWidth("Montant bordereau") }}
                  >
                    <strong>
                      {row.montantBordereau.toLocaleString()} FCFA
                    </strong>
                  </div>
                  <div
                    className="flex items-center justify-start h-full"
                    style={{ width: aliasWidth("Date cloture") }}
                  >
                    {row.dateCloture}
                  </div>
                  <div
                    className="flex items-center justify-start h-full"
                    style={{ width: aliasWidth("Bordereau") }}
                  >
                    {row.bordereau}
                  </div>
                  <div
                    className="flex items-center justify-start h-full"
                    style={{ width: aliasWidth("Ecart") }}
                  >
                    <strong
                      style={{
                        color:
                          row.montantCaisse - row.montantBordereau >= 0
                            ? "#009640"
                            : "red",
                      }}
                    >
                      {(
                        row.montantCaisse - row.montantBordereau
                      ).toLocaleString()}{" "}
                      FCFA
                    </strong>
                  </div>
                  <div
                    className="flex items-center justify-start h-full"
                    style={{ width: aliasWidth("Date revelé") }}
                  >
                    {row.dateRev}
                  </div>
                  <div
                    className="flex items-center justify-start h-full"
                    style={{ width: aliasWidth("Montant revelé") }}
                  >
                    <strong>{row.montantRev}</strong>
                  </div>
                  <div
                    className="flex items-center justify-center h-full"
                    style={{ width: aliasWidth("role") }}
                  >
                    <svg
                      width="31"
                      height="30"
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.736816"
                        width="30"
                        height="30"
                        rx="5"
                        fill="#2E2E2E"
                      />
                      <path
                        d="M10.4868 19.5H13.6668C13.7655 19.5005 13.8634 19.4816 13.9547 19.4443C14.0461 19.407 14.1292 19.352 14.1993 19.2825L19.3893 14.085L21.5193 12C21.5896 11.9302 21.6454 11.8473 21.6835 11.7559C21.7216 11.6645 21.7412 11.5665 21.7412 11.4675C21.7412 11.3684 21.7216 11.2704 21.6835 11.179C21.6454 11.0876 21.5896 11.0047 21.5193 10.935L18.3393 7.71745C18.2696 7.64716 18.1866 7.59136 18.0952 7.55329C18.0039 7.51521 17.9058 7.49561 17.8068 7.49561C17.7078 7.49561 17.6098 7.51521 17.5184 7.55329C17.427 7.59136 17.344 7.64716 17.2743 7.71745L15.1593 9.83995L9.95432 15.0375C9.88481 15.1075 9.82981 15.1906 9.79249 15.282C9.75516 15.3734 9.73625 15.4712 9.73682 15.57V18.75C9.73682 18.9489 9.81583 19.1396 9.95649 19.2803C10.0971 19.4209 10.2879 19.5 10.4868 19.5ZM17.8068 9.30745L19.9293 11.43L18.8643 12.495L16.7418 10.3725L17.8068 9.30745ZM11.2368 15.8775L15.6843 11.43L17.8068 13.5525L13.3593 18H11.2368V15.8775ZM22.4868 21H8.98682C8.7879 21 8.59714 21.079 8.45649 21.2196C8.31583 21.3603 8.23682 21.551 8.23682 21.75C8.23682 21.9489 8.31583 22.1396 8.45649 22.2803C8.59714 22.4209 8.7879 22.5 8.98682 22.5H22.4868C22.6857 22.5 22.8765 22.4209 23.0171 22.2803C23.1578 22.1396 23.2368 21.9489 23.2368 21.75C23.2368 21.551 23.1578 21.3603 23.0171 21.2196C22.8765 21.079 22.6857 21 22.4868 21Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  {/* <div
          className="flex items-center justify-start h-full"
          style={{ width: aliasWidth("Roles") }}
        >
          {row.roles &&
            row.roles.map((role: Role, roleIndex: number) => (
              <Chip
                label={role.nom}
                size="small"
                variant="outlined"
                key={roleIndex}
                className="bg-white ml-1 text-[10px]"
              />
            ))}
        </div> */}
                  {/* <div
          className="flex items-center justify-start h-full"
          style={{ width: aliasWidth("action") }}
        >
          <div>
            <Image
              src={"/svg/update.svg"}
              alt="Edit"
              width={30}
              height={30}
              className="max-sm:w-[80px]"
            />
          </div>
          <div className="ml-3">
            <Image
              src={"/svg/delete.svg"}
              alt="Delete"
              width={30}
              height={30}
              className="max-sm:w-[80px]"
            />
          </div>
        </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
