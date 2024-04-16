import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

interface MultiSelectProps {
  options: Array<{
    value: React.Key | null | undefined;
    label:
      | string
      | number
      | boolean
      | React.ReactElement
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined;
  }>;
  selectedValues: Array<string>;
  onChange: (newSelectedValues: Array<string>) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selectedValues,
  onChange,
}) => {
  // Handler pour ajouter ou retirer des valeurs de la sélection
  const handleValueChange = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v: string) => v !== value) // Retirer la valeur si déjà sélectionnée
      : [...selectedValues, value]; // Ajouter la valeur sinon
    onChange(newSelectedValues);
  };

  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="trigger-styles">
        {selectedValues.length > 0
          ? `${selectedValues.length} items selected`
          : "Select items"}
        <ChevronDownIcon />
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="content-styles">
          <SelectPrimitive.Viewport>
            {options.map(
              (option: {
                value: React.Key | null | undefined;
                label:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              }) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value ? option.value.toString() : ""}
                  className="item-styles"
                  onSelect={() =>
                    handleValueChange(
                      option.value ? option.value.toString() : ""
                    )
                  }
                >
                  <SelectPrimitive.ItemText>
                    {option.label}
                  </SelectPrimitive.ItemText>
                  {selectedValues.includes(
                    option.value ? option.value.toString() : ""
                  ) && (
                    <SelectPrimitive.ItemIndicator>
                      <CheckIcon />
                    </SelectPrimitive.ItemIndicator>
                  )}
                </SelectPrimitive.Item>
              )
            )}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export default MultiSelect;
