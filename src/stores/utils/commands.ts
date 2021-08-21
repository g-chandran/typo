import type { CommandCategories } from "../../types/mainTypes";
import { aboutStore } from "../masterStore";
import {
  updatePlaymode,
  updateTheme,
  updateTimer,
  updateWordsLength,
} from "../utils/propertiesInterface";

export interface CommandInterface {
  name: string;
  category: CommandCategories;
  callee: () => void;
}

/* 
All Commands are now grouped together, providing differentiation among them with category property
*/
export let commands: CommandInterface[] = [
  { name: "Dark", callee: () => updateTheme("dark"), category: "Theme" },
  { name: "Light", callee: () => updateTheme("light"), category: "Theme" },
  {
    name: "Classic",
    callee: () => updatePlaymode("classic"),
    category: "Playmode",
  },
  {
    name: "Reverse Classic",
    callee: () => updatePlaymode("reverse_classic"),
    category: "Playmode",
  },
  { name: "30s", callee: () => updateTimer(30), category: "Timer" },
  { name: "60s", callee: () => updateTimer(60), category: "Timer" },
  { name: "90s", callee: () => updateTimer(90), category: "Timer" },
  { name: "30", callee: () => updateWordsLength(30), category: "Words Length" },
  { name: "60", callee: () => updateWordsLength(60), category: "Words Length" },
  { name: "90", callee: () => updateWordsLength(90), category: "Words Length" },
  {
    name: "About Typo",
    callee: () => aboutStore.update((about) => (about = !about)),
    category: "Misc",
  },
];

/* 
Commands for altering the theme can be added here
*/
export const ThemeCommands: CommandInterface[] = [
  { name: "Dark", callee: () => updateTheme("dark") },
  { name: "Light", callee: () => updateTheme("light") },
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
