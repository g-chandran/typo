import { 
  setTheme,
  updateTimerDuration,
  setPlaymode, 
  getPlaymode,
  setWordsLength,
  getWordsLength
} from "./properties";
import { theme, timer, playmode, wordsLength } from "../masterStore";

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

export const updateWordsLength = (length) => {
  setWordsLength(length);
  wordsLength.set(getWordsLength());
}