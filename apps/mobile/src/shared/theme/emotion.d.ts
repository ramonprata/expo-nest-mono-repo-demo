/* eslint-disable @typescript-eslint/no-empty-object-type */
import "@emotion/react";
import { ThemeType } from "./ThemeType";

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
