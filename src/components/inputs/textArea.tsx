import { TextField } from "@mui/material";
import React from "react";
// import "@/app/globals.css"

const TextAreaComponent = ({
	label,
	value,
	placeholder,
	onChange,
	rows,
	classNames,
	disabled,
}: {
	label?: any;
	value: any;
	placeholder: any;
	onChange: any;
	rows: any;
	classNames?: any;
	disabled: any;
}) => {
	return (
		<div className="font-[300]">
			<TextField
				id="outlined-multiline-static"
				label={label}
				multiline
				variant="outlined"
				value={value}
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
				rows={rows}
				className={classNames}
				disabled={disabled}
			/>
		</div>
	);
};

export default TextAreaComponent;
