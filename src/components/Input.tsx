import * as React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/utils";
import { Field } from "formik";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconName?: string;
  iconColor?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, iconName, iconColor, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative">
        {iconName && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon
              color={iconColor}
              icon={iconName}
              className="w-4 h-4 text-secondary"
            />
          </div>
        )}

        {type === "password" && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Icon
                icon={showPassword ? "ph:eye-slash" : "mdi:eye"}
                className="w-4 h-4 text-secondary"
              />
            </button>
          </div>
        )}

        <Field
          type={showPassword ? "text" : type}
          style={
            type === "password" && !showPassword
              ? {
                  fontFamily: '"Password", monospace',
                  border: "1px solid #ADADAD",
                  minHeight: "50px",
                  borderRadius: "9px",
                }
              : {
                  border: "1px solid #ADADAD",
                  minHeight: "50px",
                  borderRadius: "9px",
                }
          }
          // border border-input
          className={cn(
            "flex outline-none  h-9 w-full bg-transparent px-3 py-1 text-sm transition-colors file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            { "pl-10": iconName },
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
