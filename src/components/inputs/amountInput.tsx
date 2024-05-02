import React from "react";
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
} from "@mui/material";

const AmountFormControl = ({
	label,
	value,
	onChange,
	classNames,
	nameInput,
}: {
	label: any;
	value: any;
	onChange: any;
	classNames?: any;
	nameInput?: any;
}) => {
	return (
		<div className="mt-2 mb-5">
			<FormControl className={classNames}>
				<InputLabel htmlFor="outlined-adornment-amount" className="font-[330]">
					{label}
				</InputLabel>
				<OutlinedInput
					id="outlined-adornment-amount"
					endAdornment={<InputAdornment position="end">F CFA</InputAdornment>}
					value={value}
					name={nameInput}
					onChange={(e) => onChange(e.target.value)}
					label={label}
					className="font-normal"
					required
				/>
			</FormControl>
		</div>
	);
};

export default AmountFormControl;
