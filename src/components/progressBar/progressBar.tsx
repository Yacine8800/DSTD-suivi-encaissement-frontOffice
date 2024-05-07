"use client";
import * as React from "react";
import LinearProgress, {
	LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(
	props: LinearProgressProps & { value: number; otherValue: any }
) {
	return (
		<Box
			sx={{
				width: "540px",
				display: "flex",
				alignItems: "center",
				padding: "10px",
				backgroundColor: "white",
				borderRadius: 1.5,
				height: 50,
			}}
		>
			<div className="pl-[10px]">
				<p className="text-[13px]">Taux de complétion</p>
				<p className="text-[11px]">
					<span className="text-[#EF7D00]">1</span>/{props.otherValue.length}{" "}
					Lignes
				</p>
			</div>
			<Box sx={{ width: "290px", mr: 1, ml: 3 }}>
				<LinearProgress
					variant="determinate"
					{...props}
					sx={{ backgroundColor: "#E3DDD7" }}
				/>
			</Box>
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">{`${Math.round(
					props.value
				)}%`}</Typography>
			</Box>
		</Box>
	);
}

export default function LinearWithValueLabel(progress: any) {
	console.log(progress);
	// const [progress, setProgress] = React.useState(10);

	// React.useEffect(() => {
	//   const timer = setInterval(() => {
	//     setProgress((prevProgress) =>
	//       prevProgress >= 100 ? 10 : prevProgress + 10
	//     );
	//   }, 3000);
	//   return () => {
	//     clearInterval(timer);
	//   };
	// }, []);

	return (
		<Box sx={{ width: "100%" }}>
			<LinearProgressWithLabel
				value={progress.value}
				otherValue={progress.otherValue}
				color="warning"
			/>
		</Box>
	);
}
