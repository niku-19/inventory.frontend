import axios from "axios";
import {
	ADD_ITEM,
	ADD_SALE,
	DATA_LOADED,
	LOADING,
	LOAD_SALE,
	REMOVE_ITEM,
	UPDATE_ITEM,
} from "./const";

const baseurl = "https://inventory-backend-orpin.vercel.app/v1/api";
console.log(baseurl);

export const addItem = (newItems) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.post(`${baseurl}/items/add-item`, {
			...newItems,
		});
		dispatch({ type: ADD_ITEM, payload: response.data.data });
	} catch (error) {
		dispatch({ type: "error" });
	}
};

export const fetchItem = () => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.get(`${baseurl}/items/items`);
		dispatch({ type: DATA_LOADED, payload: response.data.data });
	} catch (error) {
		dispatch({ type: "error" });
	}
};

export const deleteItem = (itemId) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.delete(`${baseurl}/items/${itemId}`);
		dispatch({ type: REMOVE_ITEM, payload: itemId });
	} catch (error) {
		dispatch({ type: "error" });
	}
};

export const editItem = (itemId, updatedItem) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.post(`${baseurl}/items/${itemId}/update`, {
			...updatedItem,
		});
		dispatch({ type: UPDATE_ITEM, payload: response.data.data });
	} catch (error) {
		dispatch({ type: "error" });
	}
};

export const loadSales = () => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.get(`${baseurl}/sales/sales`);

		dispatch({ type: LOAD_SALE, payload: response.data.data });
	} catch (error) {
		dispatch({ type: "error" });
	}
};

export const addSale = (newSale) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.post(`${baseurl}/sales/add-sale`, {
			...newSale,
		});
		dispatch({ type: ADD_SALE, payload: response.data.data });
	} catch (error) {}
};