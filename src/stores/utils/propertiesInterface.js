import {
  setTheme,
  updateTimerDuration,
  setPlaymode,
  getPlaymode,
  setWordsLength,
  getWordsLength,
} from "./properties";
import { theme, timer, playmode, wordsLength } from "../masterStore";

export const updateTheme = (requestedTheme) => {
  const result = setTheme(requestedTheme);
  if (result) theme.set(requestedTheme);
};

export const updateTimer = (duration) => {
  const result = updateTimerDuration(duration);
  if (result) timer.set(duration);
};

export const updatePlaymode = (requestedPlaymode) => {
  const result = setPlaymode(requestedPlaymode);
  if (result) playmode.set(getPlaymode());
};

export const updateWordsLength = (length) => {
  const result = setWordsLength(length);
  if (result) wordsLength.set(getWordsLength());
};
