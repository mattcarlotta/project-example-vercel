const openBrowser = require("react-dev-utils/openBrowser");

const { baseURL, LOCALHOST, NODE_ENV } = process.env;

/* opens a browser window */
if (NODE_ENV === "development") openBrowser(LOCALHOST);

module.exports = {
  env: {
    baseURL
  }
};
