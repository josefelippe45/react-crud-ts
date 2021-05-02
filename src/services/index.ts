import axios from 'axios';
import { Config } from 'config';

const api = () => {
  axios.create({ baseURL: Config.baseUrl });
};

export default api;
