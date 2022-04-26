import baseUrl from "../constants/urls/urls";
import axios from "axios";


const axiosService = axios.create({baseURL:baseUrl});

export {axiosService}