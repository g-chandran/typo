import { aboutStore } from "../masterStore";
import {
  updatePlaymode,
  updateTheme,
  updateTimer,
  updateWordsLength,
} from "../utils/propertiesInterface";

export interface CommandInterface {
  name: string;
  callee: () => void;
}

/* 
Commands for altering the theme can be added here
*/
export const ThemeCommands: CommandInterface[] = [
  { name: "Theme: Dark", callee: () => updateTheme("dark") },
  { name: "Theme: Light", callee: () => updateTheme("light") },
];

/* 
Commands for toggling between various playmodes can be added here.
*/
export const PlaymodeCommands: CommandInterface[] = [
  { name: "Playmode: Classic", callee: () => updatePlaymode("classic") },
  {
    name: "Playmode: Reverse Classic",
    callee: () => updatePlaymode("reverse_classic"),
  },
];

/* 
Commands for settings category can be added here.
*/
export const SettingCommands: CommandInterface[] = [
  { name: "Timer: 30s", callee: () => updateTimer(30) },
  { name: "Timer: 60s", callee: () => updateTimer(60) },
  { name: "Timer: 90s", callee: () => updateTimer(90) },
  { name: "Words Length: 30", callee: () => updateWordsLength(30) },
  { name: "Words Length: 60", callee: () => updateWordsLength(60) },
  { name: "Words Length: 90", callee: () => updateWordsLength(90) },
];

/* 
Uncategorized Commands can be added here
NOTE: The commands listed here will not gain any Filters
*/
export const MiscCommands: CommandInterface[] = [
  {
    name: "About Typo",
    callee: () => aboutStore.update((about) => (about = !about)),
  },
];

/* 
Enum for Command Filters 
*/
export enum CommandFilters {
  settingsFilter = "@",
  playmodeFilter = "#",
  themeFilter = ">",
}
