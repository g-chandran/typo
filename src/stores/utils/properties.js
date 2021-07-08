import {THEMES} from './constants';

const persistentProperties = [
    ['timer_duration', 60],
    ['theme', THEMES.LIGHT],
  ];

let properties = new Map(persistentProperties);

export const updateTimerDuration = value => {
  if (![30, 60, 90, 120].includes(value)) return;
  properties.set('timer_duration', value);
}

export const getTimerDuration = () => properties.get('timer_duration');

export const setTheme = (theme) => {
  if ([THEMES.LIGHT, THEMES.DARK].includes(theme)) {
    properties.set('theme', theme);
  }
}

export const toggleTheme = () => {
  if (properties.get('theme') === THEMES.DARK) properties.set('theme', THEMES.LIGHT);
  else properties.set('theme', THEMES.DARK);
}

export const getTheme = () => properties.get('theme');