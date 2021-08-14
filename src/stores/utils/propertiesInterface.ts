import type { Playmodes, Themes, Units } from "../../types/mainTypes";
import { playmode, theme, timer, wordsLength } from "../masterStore";
import {
  setTheme,
  updateTimerDuration,
  setPlaymode,
  setWordsLength,
} from "./properties";

export const updateTheme = (requestedTheme: Themes): void => {
  setTheme(requestedTheme);
  theme.set(requestedTheme);
};

export const updateTimer = (duration: Units): void => {
  updateTimerDuration(duration);
  timer.set(duration);
};

export const updatePlaymode = (requestedPlaymode: Playmodes): void => {
  setPlaymode(requestedPlaymode);
  playmode.set(requestedPlaymode);
};

export const updateWordsLength = (length: Units): void => {
  setWordsLength(length);
  wordsLength.set(length);
};
