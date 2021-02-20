import axios from "axios";

export default {
	search: function (state, city) {
		return axios.get(`/api/search/${state}/${city}`);
	},
	favorite: function (property) {
		return axios.post(`/api/favorite`, { property });
	},
	auth: function (data) {
		return axios.post(`/signin`, data)
	}
};
