import type { Themes, Playmodes, Units } from "../../types/mainTypes";

interface Properties {
  timer_duration: Units;
  theme: Themes;
  playmode: Playmodes;
  words_length: Units;
}

let properties: Properties = {
  timer_duration: 60,
  theme: "light",
  playmode: "Classic",
  words_length: 60,
};

export const updateTimerDuration = (duration: Units): boolean => {
  properties.timer_duration = duration;
  return true;
};

export const getTimerDuration = (): Units => properties.timer_duration;

export const setTheme = (theme: Themes): boolean => {
  properties.theme = theme;
  return true;
};

export const toggleTheme = (): boolean => {
  if (properties.theme === "dark") {
    properties.theme = "light";
    return true;
  }
  properties.theme = "dark";
  return true;
};

export const getTheme = (): Themes => properties.theme;

export const setPlaymode = (playmode: Playmodes): boolean => {
  properties.playmode = playmode;
  return true;
};

export const getPlaymode = (): Playmodes => properties.playmode;

export const setWordsLength = (length: Units): boolean => {
  properties.words_length = length;
  return true;
};

export const getWordsLength = (): Units => properties.words_length;
