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
  localStorage.setItem("theme", requestedTheme);
};

export const updateTimer = (duration: Units): void => {
  updateTimerDuration(duration);
  timer.set(duration);
  localStorage.setItem("timer", duration.toString());
};

export const updatePlaymode = (requestedPlaymode: Playmodes): void => {
  setPlaymode(requestedPlaymode);
  playmode.set(requestedPlaymode);
  localStorage.setItem("playmode", requestedPlaymode);
};

export const updateWordsLength = (length: Units): void => {
  setWordsLength(length);
  wordsLength.set(length);
  localStorage.setItem("wordsLength", length.toString());
};
