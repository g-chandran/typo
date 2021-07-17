import { setTheme } from "./properties";
import { updateTimerDuration } from "./properties";
import { theme } from "../themeStore";
import { timer } from "../timerStore";

export const updateTheme = (requestedTheme) => {
  setTheme(requestedTheme);
  theme.set(requestedTheme);
}

export const updateTimer = (duration) => {
  updateTimerDuration(duration);
  timer.set(duration);
}