import { setTheme } from "./properties";
import { theme } from "../themeStore";

export const updateTheme = (requestedTheme) => {
  setTheme(requestedTheme);
  theme.set(requestedTheme);
}