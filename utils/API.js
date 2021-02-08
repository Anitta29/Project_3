import axios from "axios";
const BASEURL = "http://localhost:3001/api/search";

export default {
	search: function (state, city) {
		return axios.get(BASEURL + `/${state}/${city}`);
	},
};
