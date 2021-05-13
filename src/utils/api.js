import axios from "axios";
import { history } from "./history";

const instance = axios.create();

instance.interceptors.response.use((response) => response, (error) => {
    if (error.response.status === 401) {
        history.push('/login');
    }
});

export default instance;