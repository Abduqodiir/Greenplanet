import axios from "axios";
import { API } from "./GetEnv";


export const instance = () => axios.create({baseURL: API})