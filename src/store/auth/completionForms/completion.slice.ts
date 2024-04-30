import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

// Définir le type pour l'état initial du slice
interface CompletionFormState {
	ecartMtnCseBord: string | undefined;
	montant: number;
	ecartMtnBordBque: string | undefined;
	isLoading: boolean;
	error: string | null;
}

// Définir l'état initial du slice
const initialState: CompletionFormState = {
	ecartMtnCseBord: undefined,
	montant: 0,
	ecartMtnBordBque: undefined,
	isLoading: false,
	error: null,
};

// Interface pour définir la structure de la réponse d'erreur
interface ErrorResponse {
	message: string;
	// Ajoutez d'autres propriétés si nécessaire
}

// Action asynchrone pour effectuer la requête POST
export const submitFormData = createAsyncThunk(
	"completionForm/submitFormData",
	async (formData: CompletionFormState) => {
		try {
			const response = await axios.post("URL_DE_VOTRE_API", formData);
			return response.data;
		} catch (error) {
			if ((error as AxiosError).response) {
				// Si l'erreur est une instance d'AxiosError avec une propriété response
				const errorResponse = (error as AxiosError<ErrorResponse>).response!
					.data;
				throw Error(errorResponse.message ?? "Une erreur s'est produite");
			} else {
				// Si l'erreur n'a pas de propriété response (peut être une erreur réseau ou autre)
				throw Error("Une erreur s'est produite");
			}
		}
	}
);

// Créer un slice avec Redux Toolkit
const completionFormSlice = createSlice({
	name: "completionForm",
	initialState,
	reducers: {
		// Définir les reducers pour mettre à jour l'état en réponse à différentes actions
		setEcartMtnCseBord: (state, action) => {
			state.ecartMtnCseBord = action.payload;
		},
		setMontant: (state, action) => {
			state.montant = action.payload;
		},
		setEcartMtnBordBque: (state, action) => {
			state.ecartMtnBordBque = action.payload;
		},
		// Ajouter d'autres reducers si nécessaire
	},
	extraReducers: (builder) => {
		builder
			.addCase(submitFormData.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(submitFormData.fulfilled, (state, action) => {
				state.isLoading = false;
				// Traitez la réponse si nécessaire
			})
			.addCase(submitFormData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message as string;
			});
	},
});

// Exporter les actions générées par createSlice
export const { setEcartMtnCseBord, setMontant, setEcartMtnBordBque } =
	completionFormSlice.actions;

// Exporter le reducer du slice
export default completionFormSlice.reducer;
