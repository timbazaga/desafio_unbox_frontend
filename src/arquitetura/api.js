import axios from "axios";
import apiUrl from "../environment";

const api = axios.create({baseURL: apiUrl});
export default api;
