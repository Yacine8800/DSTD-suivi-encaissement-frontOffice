import React, { useState, ChangeEvent } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { TRootState } from "@/store";
import { IAnnee, IRepresentation } from "@/types/IDATE.type";

type FilterComponentProps = {
  onFilterChange: (year: string, month: string) => void;
};

const FilterComponent: React.FC<FilterComponentProps> = ({
  onFilterChange,
}) => {
  const [year, setYear] = useState<string>(`${new Date().getFullYear()}`);
  const [month, setMonth] = useState<string>(`${new Date().getMonth() + 1}`);

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newYear = e.target.value;
    setYear(newYear);
    onFilterChange(newYear, month);
  };

  const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newMonth = e.target.value;
    setMonth(newMonth);
    onFilterChange(year, newMonth);
  };

  const anneeState = useSelector((state: TRootState) => state.annee.anneetva);

  const mois = useSelector((state: TRootState) => state.Mois?.Moistva);

  const repartition = useSelector(
    (state: TRootState) => state.Repartition.Repartitiontva
  );

  const YEAR_DATA = anneeState.map((item: IAnnee) => ({
    id: item.id,
    label: item.libelle,
  }));

  const TAXE_TYPE_DATA = mois.map((item: any) => ({
    id: item.id,
    label: item.libelle,
  }));

  return (
    <div className="flex justify-between px-2">
      <div className="text-[12px] font-semibold">Évolution par an</div>

      <div className="flex justify-end   gap-3">
        <div>
          <Label className="text-[11px]">Année</Label>
          <Select onValueChange={() => handleYearChange}>
            <SelectTrigger className="w-[100%] h-8">
              <SelectValue placeholder="Année" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {YEAR_DATA?.map((item) => (
                  <SelectItem key={item?.id} value={item?.id}>
                    {item?.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-[11px]">Mois</Label>
          <Select onValueChange={() => handleYearChange}>
            <SelectTrigger className="w-[100%] h-8">
              <SelectValue placeholder="Mois" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {TAXE_TYPE_DATA?.map((item) => (
                  <SelectItem key={item?.id} value={item?.id}>
                    {item?.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
