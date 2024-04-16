import React, { FC, useState, useRef } from "react";
import { SelectChangeEvent } from "@mui/material";
import { FormControl, MenuItem } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

interface CustomMultiSelectProps {
  data: { id: string; label: string; value?: string | undefined }[];
  title: string;
  isColapse?: boolean;
  onSelectionChange?: (selectedIds: string[]) => void;
  selectedItems: string[];
}

const CustomMultiSelect: FC<CustomMultiSelectProps> = ({
  data,
  title,
  isColapse,
  onSelectionChange,
  selectedItems,
}) => {
  const [menuClose, setMenuClose] = useState<boolean>(false);
  // const [typeTension, setTypeTension] = useArrayState([]);

  const handleOpenSelectedOption = () => {
    if (selectedItems?.length > 0) {
      setMenuClose(!menuClose);
    }
  };

  const allOption = { id: 0, label: "Tout", value: "all" };
  const options = [allOption, ...data];

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value as string[];
    let newSelectedIds: string[] = [];

    if (value.includes(allOption.label)) {
      newSelectedIds =
        value.length === 1 ? data.map((item) => item.id.toString()) : [];
    } else {
      newSelectedIds = value
        .map((label) => {
          const foundItem = data.find((item) => item.label === label);
          return foundItem ? foundItem.id.toString() : "";
        })
        .filter((id) => id);
    }

    onSelectionChange && onSelectionChange(newSelectedIds);
  };

  return (
    <div className="w-full h-full rounded-[6px] flex flex-col items-start justify-center gap-[5px]">
      <div className="w-full flex items-center justify-between max-w-full 2xl:max-w-[330px] lg:max-w-[280px] ">
        <div className="flex w-[85%] ">
          <span
            className={`flex w-full ${
              isColapse ? "text-[14px]" : "text-[24px]"
            } md:text-[13px] font-bold`}
          >
            {title}
          </span>
        </div>
        <div onClick={handleOpenSelectedOption} className="cursor-pointer">
          <span className="flex items-center justify-center rounded-full text-[9px] font-bold w-[22px] h-[22px] text-[#707070] bg-[#e1e1e1]">
            {selectedItems?.includes(allOption.label)
              ? selectedItems.length - 1
              : selectedItems.length}
          </span>
        </div>
      </div>

      <div className="h-full w-full rounded-6 flex flex-col items-start justify-center gap-5">
        <FormControl
          className={`${isColapse ? "w-full" : "w-[460px]"} 
          2xl:w-[400px] xl:w-[355px] md:w-[455px] sm:max-w-full lg:w-[380px] flex border-none`}
          size="small"
        >
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={data
              .filter((item) => selectedItems?.includes(item.id))
              .map((item) => item.label)}
            onChange={handleChange}
            renderValue={(selected) =>
              selected.filter((item) => item !== allOption.label).join(", ")
            }
            className="m-0 h-8"
            sx={{ fontSize: "12px", px: "-30px" }}
          >
            {options.map((item) => (
              <MenuItem
                key={item.id}
                value={item.label}
                sx={{ paddingY: "0px", paddingX: "3px" }}
              >
                <Checkbox
                  checked={selectedItems?.includes(item.id.toString())}
                />
                <ListItemText primary={item.label} sx={{ fontSize: "5px" }} />
              </MenuItem>
            ))}
          </Select>
          {menuClose && (
            <div
              className={`absolute flex flex-wrap justify-between top-9 left-0 w-full z-50 bg-slate-400 max-h-[180px] overflow-y-auto ${
                selectedItems?.length > 0 ? "p-2" : "p-0"
              } gap-2 min-h-[30px] rounded-sm`}
            >
              {selectedItems
                .filter((itemId) => itemId !== "Tout")
                .map(
                  (itemId) =>
                    data.find((dataItem) => dataItem.id === itemId)?.label
                )
                .filter((label) => label)
                .map((label, index) => (
                  <div
                    key={index}
                    className="flex-grow max-h-[30px] rounded-xl bg-white text-black text-sm px-2"
                  >
                    <span style={{ marginTop: "-20px" }}>{label}</span>
                  </div>
                ))}
            </div>
          )}
        </FormControl>
      </div>
    </div>
  );
};

export default CustomMultiSelect;
