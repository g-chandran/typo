import { THEMES, PLAYMODES } from './constants';

const persistentProperties = [
    ['timer_duration', 60],
    ['theme', THEMES.LIGHT],
    ['playmode', PLAYMODES.CLASSIC],
    ['words_length', 60],
  ];

let properties = new Map(persistentProperties);

const UNITS = new Set([30, 60, 90]);

export const updateTimerDuration = value => {
  if (UNITS.has(value)) {
    properties.set('timer_duration', value);
    return true;
  } 
  return false;
}

export const getTimerDuration = () => properties.get('timer_duration');

export const setTheme = (theme) => {
  if (Object.values(THEMES).includes(theme)) {
    properties.set('theme', theme);
    return true;
  }
  return false;
}

export const toggleTheme = () => {
  if (properties.get('theme') === THEMES.DARK) properties.set('theme', THEMES.LIGHT);
  else properties.set('theme', THEMES.DARK);
}

export const getTheme = () => properties.get('theme');

export const setPlaymode = (playmode) => {
  if (Object.values(PLAYMODES).includes(playmode)) {
    properties.set('playmode', playmode);
    return true;
  }
  return false;
}

export const getPlaymode = () => properties.get('playmode')

export const setWordsLength = (length) => {
  if (UNITS.has(length)) {
    properties.set('words_length', length);
    return true;
  }
  return false;
  // if ([30, 60, 90].includes(length)) properties.set('words_length', length);
}

export const getWordsLength = () => properties.get('words_length')