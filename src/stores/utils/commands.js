import { THEMES } from "./constants";
import { updateTimerDuration } from './properties.js';
import { updateTheme } from "./propertiesInterface";


/* 
  Commands for altering the theme can be added here
*/
export const THEME_COMMANDS = [
  {name: "Theme: Dark", callee: () => updateTheme(THEMES.DARK)},
  {name: "Theme: Light", callee: () => updateTheme(THEMES.LIGHT)},
];

/* 
  Commands for toggling between various playmodes can be added here.
*/
export const PLAYMODE_COMMANDS = [
  {name: "Playmode: Classic", callee: () => console.log("Classic Mode")},
  {name: "Playmode: Reverse Classic", callee: () => console.log("Reverse Classic Mode")},
];


/* 
  Commands for settings category can be added here.
  - Timer updations can be added here with help of updateTimerDuration() from properties.js
*/
export const SETTINGS_COMMANDS = [
  {name: "Timer: 30s", callee: () => updateTimerDuration(30)},
  {name: "Timer: 60s", callee: () => updateTimerDuration(60)},
  {name: "Timer: 90s", callee: () => updateTimerDuration(90)},
];

export const COMMAND_FILTERS = Object.freeze(
  {SETTINGS_FILTER: '@', PLAYMODE_FILTER: '#', THEME_FILTER: '>'}
);