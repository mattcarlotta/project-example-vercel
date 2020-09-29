/* istanbul ignore file */
import { css, Global } from "@emotion/core";

export const GlobalStylesheet = (): JSX.Element => (
  <Global
    styles={css`
      @font-face {
        font-family: "Poppins Light";
        font-style: normal;
        font-weight: normal;
        src: url("/fonts/Poppins-Light.ttf") format("truetype");
      }

      #__next,
      body,
      html {
        min-height: 100vh;
      }

      html,
      body {
        width: 100%;
        margin: 0;
        padding: 0;
      }

      body {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Poppins Light", -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
          "Droid Sans", "Helvetica Neue", sans-serif;
        background-color: #ebebeb;
      }

      ::-moz-focus-inner {
        border: 0;
      }

      *,
      ::after,
      ::before {
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStylesheet;
