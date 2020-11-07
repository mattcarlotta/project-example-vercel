/* istanbul ignore file */
import get from "lodash.get";
import axios from "axios";

axios.interceptors.response.use(
  response => response,
  error => {
    const err = get(error, ["response", "data", "err"]);

    return Promise.reject(err || error.message);
  }
);

const { baseURL } = process.env;

export const app = axios.create({
  baseURL
});

app.interceptors.response.use(
  response => response,
  error => {
    const err = get(error, ["response", "data", "err"]);

    return Promise.reject(err || error.message);
  }
);

export { axios };

export default app;
