/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import { TRootState, store } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { exportToExcel } from "@/utils/exportXls";
import { exportToCSV } from "@/utils/exportcsv";
import { Card } from "@mui/material";
import { Icon } from "@iconify/react";
import LoaderData from "./loaderData";
import { IRapFact } from "@/types/IRapFactDR.type";
import { fetchrapprochementFactureeDr } from "@/store/reducers/TVA/RAPPROCHEMENT/RapTvaDR.slice";
import { fetchrapprochementEncaisseDr } from "@/store/reducers/TVA/RAPPROCHEMENT/RapTvaEncDR.slice";

import { IAnnee } from "@/types/IDATE.type";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchanneeTVA } from "@/store/reducers/slicefiltre/Annee.slice";
import { fetchMoisTVA } from "@/store/reducers/slicefiltre/Mois.slice";

type ChartDataItem = {
  name: string;
  pv: number;
  uv: number;
  year: string;
  month: string;
};

type ReusableChartComponentProps = {
  data: any;
  onFilterChange: (year: string, month: string) => void;
  title: string;
  handleValidate?: () => void;
  handleYearChange?: (id: string) => void;
  handleMoisChange?: (id: string) => void;
  handlecancel?: () => void;
  selectedMois: any;
  setSelectedMois: (id: string) => void;
  selectedYear: string;
  setSelectedYear: (id: string) => void;
  loading: any;
};

const ReusableChartComponent: React.FC<ReusableChartComponentProps> = ({
  data,
  onFilterChange,
  title,
  handleValidate,
  handleYearChange,
  handleMoisChange,
  handlecancel,
  selectedYear,
  selectedMois,
  setSelectedMois,
  setSelectedYear,
  loading,
}) => {
  const RapFactDr = useSelector(
    (state: TRootState) =>
      state?.RapprochementTVADrFact?.rapprochementFactureeDr
  );

  const dispatch = useDispatch<typeof store.dispatch>();

  const anneeState = useSelector((state: TRootState) => state.annee.anneetva);

  const mois = useSelector((state: TRootState) => state.Mois?.Moistva);

  const YEAR_DATA = anneeState.map((item: IAnnee) => ({
    id: item.id,
    label: item.libelle,
  }));

  const TAXE_TYPE_DATA = mois.map((item: IAnnee) => ({
    id: item.id,
    label: item.libelle,
  }));

  useEffect(() => {
    console.log("Nouvelles données reçues dans ReusableChartComponent:", data);
  }, [data]);

  const adjustedData = useMemo(() => {
    return (data || []).map((item: { jade: number; saphir: number }) => ({
      ...item,
      ecart: Math.abs(item.jade - item.saphir),
    }));
  }, [data]);

  const currentYear = new Date().getFullYear().toString();
  const defaultYearId =
    anneeState.find((year: { libelle: string }) => year.libelle === currentYear)
      ?.id || anneeState[anneeState.length - 1]?.id;

  const defaultMoisId =
    anneeState.find((mois: { libelle: string }) => mois.libelle === "Janvier")
      ?.id || TAXE_TYPE_DATA[0]?.id;

  // useEffect(() => {
  //   localStorage.setItem("selectedYear", selectedYear);
  //   localStorage.setItem("selectedMois", selectedMois);
  // }, [selectedYear, selectedMois]);

  useEffect(() => {
    if (selectedYear == undefined) {
      setSelectedYear(defaultYearId);
    }
  }, [selectedYear, defaultYearId]);

  useEffect(() => {
    if (selectedMois == undefined) {
      setSelectedMois(defaultMoisId);
    }
  }, [selectedMois, defaultMoisId]);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const formatNumber = (value: number) => {
    return value.toLocaleString("fr-FR", { maximumFractionDigits: 10 });
  };

  const prepareDataForExport = (item: IRapFact[]) => {
    return adjustedData.map(
      (item: {
        name: any;
        month: any;
        year: any;
        jade: number;
        saphir: number;
        ecart: number;
      }) => {
        return {
          Libelle: item.name,
          Mois: item.month,
          Annee: item.year,
          Jade: formatNumber(item.jade),
          Saphir: formatNumber(item.saphir),
          Ecart: formatNumber(item.ecart),
        };
      }
    );
  };

  const prepareDataForExportCSV = (item: IRapFact[]) => {
    return adjustedData.map(
      (item: {
        name: any;
        month: any;
        year: any;
        jade: number;
        saphir: number;
        ecart: number;
      }) => {
        return {
          Libelle: item.name,
          Mois: item.month,
          Annee: item.year,
          Jade: formatNumber(item.jade),
          Saphir: formatNumber(item.saphir),
          Ecart: formatNumber(item.ecart),
        };
      }
    );
  };

  const handleExport = () => {
    const dataForExport = prepareDataForExport(RapFactDr);
    exportToExcel(dataForExport, "Rapprochement TVA facturée par DR XLS");
  };

  const handleExportCSV = () => {
    const dataForExport = prepareDataForExportCSV(RapFactDr);
    exportToCSV(dataForExport, "Rapprochement TVA facturée par DR CSV");
  };
  const formatYAxis = (value: any) => {
    const sign = value < 0 ? "-" : "";

    // Utilisez la valeur absolue de la valeur pour le formatage
    const absValue = Math.abs(value);

    if (absValue >= 1e9) {
      return `${sign}${absValue / 1e9}MD`;
    } else if (absValue >= 1e6) {
      return `${sign}${absValue / 1e6}M`;
    } else {
      return `${sign}${absValue}`;
    }
  };

  const formatTooltip = (value: number, name: any, props: any) => {
    if (typeof value === "number" && Math.abs(value) >= 1000) {
      return `${value.toLocaleString("fr-FR")}`;
    }
    return `${value}`;
  };

  useEffect(() => {
    const queryParams: any = {
      // yearId: selectedYear || "",
      // monthId: selectedMois || "",
    };

    dispatch(fetchrapprochementFactureeDr(queryParams));
    dispatch(fetchrapprochementEncaisseDr(queryParams));
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchanneeTVA());
    dispatch(fetchMoisTVA());
  }, [dispatch]);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`w-full p-1${
        isExpanded
          ? "lg:w-screen lg:h-screen fixed inset-0 z-50 bg-white overflow-auto p-10"
          : ""
      }`}
    >
      <div className="text-[14px] font-semibold mb-3">{title}</div>
      <Card
        elevation={0}
        className={`${
          isExpanded ? "border p-4" : "p-5 pb-5 border-none shadow-none"
        }`}
      >
        <div className="flex justify-end flex-col">
          <div className="flex justify-end items-center p-2 text-center gap-5 mb-3">
            <Icon
              icon="teenyicons:csv-solid"
              className={`${
                isExpanded
                  ? "h-[15px] cursor-pointer"
                  : "w-[12px] h-[12px] cursor-pointer"
              }`}
              onClick={handleExportCSV}
            />
            <Icon
              icon="vscode-icons:file-type-excel"
              className={`${
                isExpanded
                  ? "h-[18px] cursor-pointer"
                  : "w-[15px] h-[15px] cursor-pointer"
              }`}
              onClick={handleExport}
            />
            <Icon
              icon={`${
                isExpanded
                  ? "icon-park:off-screen"
                  : "fluent:resize-large-24-regular"
              }`}
              className={`${
                isExpanded
                  ? "uim:compress cursor-pointer"
                  : "fluent:resize-large-24-regular cursor-pointer"
              }`}
              onClick={toggleExpansion}
            />
          </div>
          <div className="flex justify-between flex-row items-end p-0 mb-3">
            <div className="text-[13px] text-gray-500 font-normal">
              Évolution par DR
            </div>

            <div className="flex justify-end gap-3">
              <div>
                <Label className="text-[11px]">Année</Label>
                <Select
                  onValueChange={(id: string) => handleYearChange?.(id)}
                  value={selectedYear}
                >
                  <SelectTrigger className="w-[100%] h-8">
                    <SelectValue placeholder="Année" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {YEAR_DATA?.map((item) => (
                        <SelectItem key={item?.id} value={item?.id!}>
                          {item?.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-[11px]">Mois</Label>
                <Select
                  onValueChange={(id: string) => handleMoisChange?.(id)}
                  value={selectedMois}
                >
                  <SelectTrigger className="w-[100%] h-8">
                    <SelectValue placeholder="Mois" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {TAXE_TYPE_DATA?.map((item) => (
                        <SelectItem key={item?.id} value={item?.id!}>
                          {item?.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {selectedMois && selectedYear && (
                <div className="relative flex gap-4 mt-[10px]">
                  <div title="Valider" onClick={handleValidate}>
                    <Icon
                      icon="icon-park-solid:correct"
                      className="text-[#16a34a] cursor-pointer"
                    />
                  </div>

                  <div title="Annuler" onClick={handlecancel}>
                    <Icon
                      icon="fluent:arrow-reset-20-filled"
                      className="cursor-pointer text-[#fc5454] font-bold"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <LoaderData />
          </div>
        ) : !data || data.length === 0 ? (
          <div className="text-center py-10">Aucun element à cette date</div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
              className={`bg-gray-50 rounded-lg relative`}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" fontSize="9px" />
              <YAxis fontSize="9px" tickFormatter={formatYAxis} />
              <Tooltip formatter={formatTooltip} />
              <Bar dataKey="jade" name="J@DE" fill="#FFB700" />
              <Bar dataKey="saphir" name="SAPHIR" fill="#82ca9d" />
              <Bar dataKey="ecart" name="ECART" fill="#fb3737e2" />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        )}
      </Card>
    </div>
  );
};

export default ReusableChartComponent;
