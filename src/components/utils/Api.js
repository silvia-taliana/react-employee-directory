import axios from "axios";

const API = {
    getAllEmployees: function () {
        return axios.get("https://randomuser.me/api/?results=30");
    }
};

export default API