import { setTheme } from "./properties";
import { updateTimerDuration } from "./properties";
import { theme, timer } from "../masterStore";

export const updateTheme = (requestedTheme) => {
  setTheme(requestedTheme);
  theme.set(requestedTheme);
}

export const updateTimer = (duration) => {
  updateTimerDuration(duration);
  timer.set(duration);
}