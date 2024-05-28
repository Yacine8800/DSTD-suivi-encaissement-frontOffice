import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Icon, InlineIcon } from "@iconify/react";
import { styled, alpha } from "@mui/material/styles";

import React, { useCallback, useEffect, useState } from "react";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

export type MainNavbarDto = {
	sessionTitle: string;
};

const StyledMenu = styled((props: MenuProps) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color:
			theme.palette.mode === "light"
				? "rgb(55, 65, 81)"
				: theme.palette.grey[300],
		boxShadow:
			"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
		"& .MuiMenu-list": {
			padding: "4px 0",
		},
	},
}));

export default function MainNavbar({
	sessionTitle,
	isExpanded,
}: {
	sessionTitle: MainNavbarDto;
	isExpanded: any;
}) {
	const [open, setOpen] = useState(true);
	const [isClient, setIsClient] = useState(false);
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		// Met à jour la largeur de la fenêtre lorsqu'elle est redimensionnée
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Ajoute un écouteur d'événement pour la redimension de la fenêtre
		window.addEventListener("resize", handleResize);

		// Appelle handleResize pour initialiser windowWidth
		handleResize();

		// Nettoie l'écouteur d'événement lorsqu'un composant est démonté
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// console.log(userConnectedFromStore);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const deconnexion = useCallback(() => {
		localStorage.clear();
		window.location.href = "/auth/login";
	}, []);

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const openMenu = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleDialogOpen = () => {
		setIsDialogOpen(true);
		setAnchorEl(null);
	};
	const handleDialogClose = () => {
		setIsDialogOpen(false);
	};
	// Vérifie si le le tableau est étendu
	useEffect(() => {
		// Écouter les changements de isExpanded ici
		if (isExpanded) {
			// Faire quelque chose lorsque isExpanded est vrai
			console.log(isExpanded);
		} else {
			// Faire quelque chose lorsque isExpanded est faux
			console.log(isExpanded);
		}
	}, [isExpanded]);
	return (
		<nav>
			<div className="flex items-center justify-between">
				<div className="text-[15px] ml-2">
					{windowWidth < 640 ? sessionTitle?.split(" ")[0] : sessionTitle}
				</div>

				<div className="flex items-center space-x-3">
					<div
						className="-space-y-1 cursor-pointer"
						id="demo-customized-button"
						aria-controls={openMenu ? "demo-customized-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={openMenu ? "true" : undefined}
						onClick={handleClick}
					>
						<div className="text-[12px] text-[#26353F] uppercase font-semibold">
							Yacine DIOMANDE
						</div>
						<div className="relative text-[10px] text-[#EF7D00] ml-[25%] uppercase inset-1">
							Administrateur
						</div>
					</div>
					<Avatar className="rounded-md">
						<AvatarFallback className="bg-[#26353F] opacity-4">
							<Icon
								icon="gridicons:multiple-users"
								className={`text-white h-5 w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
							/>
						</AvatarFallback>
					</Avatar>
					<div
						id="demo-customized-button"
						aria-controls={openMenu ? "demo-customized-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={openMenu ? "true" : undefined}
						onClick={handleClick}
						className="cursor-pointer"
					>
						<Icon
							icon="iconamoon:arrow-down-2-bold"
							className="flex h-6 w-6 -ml-2"
						/>
					</div>

					<StyledMenu
						id="demo-customized-menu"
						MenuListProps={{
							"aria-labelledby": "demo-customized-button",
						}}
						anchorEl={anchorEl}
						open={openMenu}
						onClose={handleClose}
					>
						<MenuItem disableRipple className="cursor-default">
							<Icon icon="oui:number" className="text-[#000] h-6 w-6 " />
							<p className="text-[#000] ml-2">Matricule : </p>{" "}
							<p className="left-3 text-[#059241] ml-2">12345A</p>
						</MenuItem>
						<MenuItem disableRipple className="cursor-default">
							<Icon
								icon="material-symbols-light:warehouse-outline-rounded"
								className="text-[#000] h-5 w-5"
							/>{" "}
							<p className="text-[#000] ml-2">Entreprise : </p>
							<p className="text-[#059241] ml-2">CIE</p>
						</MenuItem>
						<Divider sx={{ my: 0.5 }} />
						<MenuItem disableRipple onClick={handleDialogOpen}>
							<Icon
								className="h-[18px] w-[18px] text-[#000] cursor-pointer"
								icon="tabler:logout-2"
							/>
							<p className="ml-2">Deconnexion</p>
						</MenuItem>
					</StyledMenu>
					<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
						<DialogContent className="max-w-[400px] py-6 gap-1">
							<DialogHeader>
								<DialogTitle>Déconnexion</DialogTitle>
								<DialogDescription>
									Etes-vous sur de vouloir vous déconnecter ?
								</DialogDescription>
							</DialogHeader>

							<DialogFooter className="sm:justify-start">
								<div className="flex justify-center mt-5 gap-8 ">
									<DialogClose asChild>
										<button className="bg-gray-400 px-4 h-[44px] mt-3 text-white rounded-lg hover:bg-gray-500">
											Annuler
										</button>
									</DialogClose>
									<button
										className="bg-orange-500 px-4 h-[44px] mt-3 text-white rounded-lg hover:bg-orange-600"
										type="submit"
										onClick={deconnexion}
									>
										Confirmer
									</button>
								</div>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</nav>
	);
}
