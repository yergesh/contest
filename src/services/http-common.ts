import axios from "axios";
const api = "https://contester.azurewebsites.net/";

const http = axios.create({
    baseURL: api
})

export default http;
