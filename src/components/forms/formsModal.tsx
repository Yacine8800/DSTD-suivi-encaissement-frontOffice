import { Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import TextAreaComponent from "../inputs/textArea";
import AmountFormControl from "../inputs/amountInput";
// import { Box, Button } from ''
import SendIcon from "@mui/material/Icon";
import { ErrorMessage, Formik } from "formik";

// interface dataRowInterface {
//     dateEnc: Date;
//     caisseMode: string;
//     banque: string;
//     montantCaisse: number;
//     montantBordereau: number;
//     dateCloture: Date;
//     bordereau: string;
//     ecart: number;
//     dateRev: Date;
//     montantRev: number;
// }

interface modalFormData {
	ecartMtnCseBord?: string;
	montant?: number;
	ecartMtnBordBque?: string;
}

interface FormValues {
	montant: string;
}

const FormsControl = ({
	isOpen,
	closeModal,
	modalRef,
	rowData,
}: {
	isOpen: any;
	closeModal: any;
	modalRef: any;
	rowData: any;
}) => {
	// console.log(isOpen);
	// console.log(closeModal);
	// console.log(rowData);
	// console.log(rowData.ecart);
	// console.log(modalRef);
	const [formData, setFormData] = useState({
		ecartMtnCseBord: "",
		montant: "",
		ecartMtnBordBque: "",
	});

	const [checkboxChecked1, setCheckboxChecked1] = useState(false);
	const [checkboxChecked2, setCheckboxChecked2] = useState(false);
	const [stateButton, setStateButton] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	// const ecart = 100000;
	const colorText = {
		primary: "[#1c874a]",
		secondary: "[#964856]",
	};

	console.log(rowData);
	// Fonction pour gérer le changement de la case à cocher
	const handleCheckboxChange1 = (event: any) => {
		setCheckboxChecked1(event.target.checked);
		// Si la case à cocher est cochée, effacez la valeur dans le champ de texte
		if (event.target.checked) {
			handleChange("ecartMtnCseBord", "");
		}
	};

	const handleCheckboxChange2 = (event: any) => {
		setCheckboxChecked2(event.target.checked);
		// Si la case à cocher est cochée, effacez la valeur dans le champ de texte
		if (event.target.checked) {
			handleChange("ecartMtnBordBque", "");
		}
	};

	const handleChange = (fieldName: any, value: any) => {
		setFormData({
			...formData,
			[fieldName]: value,
		});

		isOpen = !isOpen;
	};

	console.log(formData);
	console.log(isOpen);
	// console.log(colorText.primary);
	const handleSubmit = (event: any) => {
		event.preventDefault();
		// Vérifier si les champs obligatoires sont remplis
		if (
			// !formData.ecartMtnCseBord ||
			!formData.montant ||
			isNaN(parseFloat(formData.montant))
			// !formData.ecartMtnBordBque
		) {
			// Mettre à jour le message d'erreur
			setErrorMessage("Veuillez remplir tous les champs obligatoires.");
			return; // Arrêter la soumission du formulaire si les champs obligatoires ne sont pas remplis
		}
		// Si les champs sont remplis, effacer le message d'erreur
		setErrorMessage("");

		// Continuer avec le traitement du formulaire
		console.log(event);
		console.log("Données envoyées :", formData);
		// Ici vous pouvez envoyer les données à votre backend

		// Mis à jour stateButton après le traitement du formulaire
		setStateButton(true);

		// Fermer le modal après la soumission du formulaire
		closeModal();
	};

	const date = "new Date()";

	return (
		<div className={isOpen == false ? "hidden" : ""}>
			<div
				ref={modalRef}
				className=" fixed top-0 right-0 bottom-0 flex justify-end items-center text-[#23252F] "
			>
				<div className="bg-white w-[750px] h-full overflow-y-auto">
					<div className="p-6 ">
						<h2 className="text-xl font-bold mb-4">Formulaire d'édition</h2>
						<div>
							<Box
								component="form"
								// sx={{
								//     '& .MuiTextField-root': {  },
								// }}
								noValidate
								autoComplete="off"
								onSubmit={handleSubmit} // Ajoutez ceci pour lier la soumission du formulaire à la fonction handleSubmit
							>
								<Formik
									initialValues={{ montant: "" }}
									validate={(values: any) => {
										const errors: Partial<FormValues> = {};

										if (isNaN(parseFloat(values.montant))) {
											errors.montant = "Le montant doit être un nombre";
										}
										return errors;
									}}
									onSubmit={(values: any, actions: any) => {
										// Gérer la soumission du formulaire ici
									}}
								>
									{({ handleSubmit }) => (
										<form onSubmit={handleSubmit}>
											<div className="w-full pt-5 pb-5 pr-5  rounded-lg bg-">
												<div>
													{rowData?.dateEnc ? (
														<p className="font-normal">
															Journée du{" "}
															<span className="font-bold">
																{new Date(rowData.dateEnc).toLocaleDateString()}
															</span>
														</p>
													) : (
														<p className="font-normal">Date non disponible</p>
													)}
												</div>
												<div className="flex flex-wrap w-full">
													<div className="w-full sm:w-1/2 md:w-1/3 pt-2 pr-2 pb-2">
														<div className=" h-15 flex justify-start items-start">
															<p className="font-bold">
																{rowData?.montantCaisse
																	? rowData?.montantCaisse
																	: 0}{" "}
																FCFA{" "}
															</p>
														</div>
														<div className=" h-15 flex justify-start items-start">
															<p className="text-gray-400 font-medium">
																Montant Caisses
															</p>
														</div>
													</div>
													<div className="w-full sm:w-1/2 md:w-1/3 pt-2 pr-2 pb-2">
														<div className="h-15 flex justify-start items-center">
															<p className="font-bold">
																{rowData?.montantBordereau
																	? rowData?.montantBordereau
																	: 0}{" "}
																FCFA{" "}
															</p>
														</div>
														<div className="h-15 flex justify-start items-center">
															<p className="text-gray-400 font-medium">
																Montant Bordereau
															</p>
														</div>
													</div>
													<div className="w-full sm:w-1/2 md:w-1/3 p-2">
														<div className=" h-15 flex justify-start items-start">
															<p
																className={
																	rowData.ecart > 5000
																		? ` font-bold text-[#1c874a]`
																		: `font-bold text-[#c14848]`
																}
															>
																{rowData.montantCaisse -
																	rowData.montantBordereau}{" "}
																FCFA
															</p>
														</div>
														<div className=" h-15 flex justify-start items-start">
															<p className="text-gray-400	font-bold">Ecart</p>
														</div>
													</div>
													<hr className="w-full border-t border-gray-400 sm:hidden" />
												</div>
											</div>
											<div className="flex flex-wrap w-full">
												<div className="w-full sm:w-1/2 md:w-[90%] justify-center items-center pl-0 pt-2 pb-0 mt-1">
													<label className="">
														Observation sur l'écart entre les montants de la
														caisse et du bordereau
													</label>
												</div>
												<div className="w-full sm:w-1/2 md:w-[10%] p-1 ">
													<FormControlLabel
														control={
															<Checkbox onChange={handleCheckboxChange1} />
														}
														label="RAS"
														className="flex float-right right-0 "
													/>
												</div>
											</div>
											<TextAreaComponent
												placeholder="Saisir votre observation ici"
												value={formData.ecartMtnCseBord}
												onChange={(value: any) =>
													handleChange("ecartMtnCseBord", value)
												}
												rows={4}
												disabled={checkboxChecked1}
												classNames={"w-full font-[350]"}
											/>

											<hr className="mt-5 mb-5" />
											{/* <div className="relative inset-y-0 left-0 w-px bg-red-400"></div> */}
											<div className="w-full bg-[#F6F6F6] p-5 rounded-lg">
												<div>
													<p>
														Relevé du{" "}
														<span className="font-bold">
															{new Date(rowData.dateRev).toLocaleDateString()}
														</span>
													</p>
												</div>
												<div className="flex flex-wrap w-full ">
													<div className="w-full sm:w-1/2 md:w-1/3 p-2">
														<div className=" h-15 flex justify-start items-start">
															<p className="font-bold">
																{rowData?.montantBordereau
																	? rowData?.montantBordereau
																	: "---"}{" "}
																FCFA{" "}
															</p>
														</div>
														<div className=" h-15 flex justify-start items-start">
															<p className="text-gray-400">Montant Bordereau</p>
														</div>
													</div>
													<div className="w-full sm:w-1/2 md:w-1/3 p-2">
														<div className="h-15 flex w-full justify-start items-center">
															<p className="font-bold">
																{rowData?.banque ? rowData?.banque : "---"}
																<span className="justify-end items-end">
																	{rowData?.montant_banque
																		? rowData?.montant_banque
																		: "---"}
																	FCFA
																</span>{" "}
															</p>
														</div>
														<div className="h-15 flex justify-start items-center">
															<p className="text-gray-400	">Montant Banque</p>
														</div>
													</div>
													<div className="w-full sm:w-1/2 md:w-1/3 p-2">
														<div className=" h-15 flex justify-start items-start">
															<p
																className={
																	rowData.ecart > 5000
																		? ` font-bold text-[#1c874a]`
																		: `font-bold text-[#c14848]`
																}
															>
																{rowData.montantCaisse -
																	rowData.montantBordereau}{" "}
																FCFA
															</p>
														</div>
														<div className=" h-15 flex justify-start items-start">
															<p className="text-gray-400	">Ecart</p>
														</div>
													</div>
												</div>
											</div>

											<div className="flex flex-wrap w-full">
												<div className="w-full sm:w-1/2 md:w-[90%] justify-center items-center pl-2 pt-2 pb-0 mt-1">
													<label className="">
														Montant provenant de la banque
													</label>
												</div>
												<div className="w-full">
													<ErrorMessage
														name="montant"
														component="div"
														className="transition ease-in-out delay-150 text-white font-medium bg-orange-600 p-3 opacity-70"
													/>
												</div>
											</div>
											<AmountFormControl
												label="saisir le montant provenant de la banque ici"
												value={formData.montant}
												onChange={(value: any) =>
													handleChange("montant", value)
												}
												classNames={"w-full"}
												nameInput="montant"
											/>

											<div className="flex flex-wrap w-full">
												<div className="w-full sm:w-1/2 md:w-[90%] justify-center items-center pl-2 pt-2 pb-0 mt-1">
													<label className="">
														Observation sur l'écart entre les montants de la
														caisse et de la banque
													</label>
												</div>
												<div className="w-full sm:w-1/2 md:w-[10%] p-1 ">
													<FormControlLabel
														control={
															<Checkbox onChange={handleCheckboxChange2} />
														}
														label="RAS"
														className="flex float-right right-0 "
													/>
												</div>
											</div>
											<TextAreaComponent
												placeholder="Saisir votre observation ici"
												value={formData.ecartMtnBordBque}
												onChange={(value: any) =>
													handleChange("ecartMtnBordBque", value)
												}
												rows={4}
												disabled={checkboxChecked2}
												classNames={"w-full font-[300]"}
											/>
											<div className="flex justify-end  items-center mt-5 text-center">
												<button
													onClick={handleSubmit}
													className="w-[50%] text-center bg-[#EF7D00] hover:bg-[#ef9300] p-3 text-white rounded-lg"
													disabled={stateButton}
												>
													Envoyer
												</button>
											</div>
										</form>
									)}
								</Formik>
							</Box>
						</div>
						{/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ">Close</button> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormsControl;
