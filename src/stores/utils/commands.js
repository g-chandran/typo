import { PLAYMODES, THEMES } from "./constants";
import { 
  updatePlaymode,
  updateTheme,
  updateTimer,
  updateWordsLength,
} from "./propertiesInterface";


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
  {name: "Playmode: Classic", callee: () => updatePlaymode(PLAYMODES.CLASSIC)},
  {name: "Playmode: Reverse Classic", callee: () => updatePlaymode(PLAYMODES.REVERSE_CLASSIC)},
];


/* 
  Commands for settings category can be added here.
  - Timer updations can be added here with help of updateTimerDuration() from properties.js
*/
export const SETTINGS_COMMANDS = [
  {name: "Timer: 30s", callee: () => updateTimer(30)},
  {name: "Timer: 60s", callee: () => updateTimer(60)},
  {name: "Timer: 90s", callee: () => updateTimer(90)},
  {name: "Words Length: 30", callee: () => updateWordsLength(30)},
  {name: "Words Length: 60", callee: () => updateWordsLength(60)},
  {name: "Words Length: 90", callee: () => updateWordsLength(90)},
];

export const COMMAND_FILTERS = Object.freeze(
  {SETTINGS_FILTER: '@', PLAYMODE_FILTER: '#', THEME_FILTER: '>'}
);