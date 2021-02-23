import API from "../utils/API";
// global state for authentification

const initialState = {
	email: "",
	password: "",
	errorMessage: "",
	token: "",
	authenticated: false,
};

export const register = (data) => (dispatch) => {
	API.register(data).then((result) => {
		dispatch({
			type: "CLEAR_ERROR",
		});
		dispatch({
			type: "LOGIN",
			payload: result.data,
		});
	});
};

// set redux actions
export const login = () => (dispatch, getState) => {
	const { email, password } = getState().auth;
	const user = { email, password };
	API.auth(user)
		.then((response) => {
			dispatch({
				type: "CLEAR_ERROR",
			});
			dispatch({
				type: "LOGIN",
				payload: response.data,
			});
		})
		.catch((error) => {
			dispatch({
				type: "ADD_ERROR",
			});
		});
};

export const logout = () => async (dispatch) => {
	await dispatch({
		type: "LOGOUT",
	});
};
export const setEmail = (payload) => {
	return {
		type: "EMAIL",
		payload,
	};
};
export const setPassword = (payload) => {
	return {
		type: "PASSWORD",
		payload,
	};
};
// creating reducer
export default (auth = initialState, action) => {
	switch (action.type) {
		case "CLEAR_ERROR":
			return { ...auth, errorMessage: "" };
		case "ADD_ERROR":
			return { ...auth, errorMessage: "Wrong user name or password" };
		case "EMAIL":
			return { ...auth, email: action.payload };
		case "PASSWORD":
			return { ...auth, password: action.payload };
		case "LOGIN":
			localStorage.setItem("token", action.payload.token);
			return {
				...auth,
				token: action.payload.token,
				errorMessage: "",
				authenticated: true,
			};
		case "LOGOUT":
			localStorage.removeItem("token");
			return { ...auth, token: null, errorMessage: "", authenticated: false };
		default:
			return auth;
	}
};
