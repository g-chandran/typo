import { 
  setTheme,
  updateTimerDuration,
  setPlaymode, 
  getPlaymode
} from "./properties";
import { theme, timer, playmode } from "../masterStore";

export const updateTheme = (requestedTheme) => {
  setTheme(requestedTheme);
  theme.set(requestedTheme);
}

export const updateTimer = (duration) => {
  updateTimerDuration(duration);
  timer.set(duration);
}

export const updatePlaymode = (requestedPlaymode) => {
  setPlaymode(requestedPlaymode);
  playmode.set(getPlaymode());
}