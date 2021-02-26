import axios from "axios";

const API = {
	search: function (state, city) {
		return axios.get(`/api/search/${state}/${city}`);
	},

	getMyPropertyList: function () {
		const token = localStorage.getItem("token")
		return axios.get(`/api/properties`, {
			headers: { Authorization: "Bearer" + token }
		})
	},
	saveProperty: function (property) {
		const token = localStorage.getItem("token")
		return axios.put(`/api/properties`, { property }, 
		{ headers: { Authorization: "Bearer" + token } });
	},
	auth: function (data) {
		return axios.post("/signin", data);
	},
	register: function (data) {
		return axios.post("/signup", data);
	},
	getUserData: function () {
		const token = localStorage.getItem("token");
		return axios.get("/api/user/data?t=" + Date.now(), {
			headers: { Authorization: "Bearer" + token}
		})
	},
	deleteProperty: function (id) {
		const token = localStorage.getItem("token");
		return axios.delete("/api/properties" + id, {
			headers: { Authorization: "Bearer" + token}
		})
	}

};

export default API
