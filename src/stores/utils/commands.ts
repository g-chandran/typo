import {
  NonSettingCommandTypes,
  SettingCommandTypes,
} from "../../types/masterEnums";
import { aboutStore } from "../masterStore";
import {
  updatePlaymode,
  updateTheme,
  updateTimer,
  updateWordsLength,
} from "../utils/propertiesInterface";

export interface CommandInterface {
  name: string;
  category: string;
  callee: () => void;
}

/* 
All Commands are now grouped together, providing differentiation among them with category property
*/
export let Commands: CommandInterface[] = [
  {
    name: "Dark",
    callee: () => updateTheme("dark"),
    category: NonSettingCommandTypes.theme,
  },
  {
    name: "Light",
    callee: () => updateTheme("light"),
    category: NonSettingCommandTypes.theme,
  },
  {
    name: "Classic",
    callee: () => updatePlaymode("Classic"),
    category: NonSettingCommandTypes.playmode,
  },
  {
    name: "Reverse Classic",
    callee: () => updatePlaymode("Reverse Classic"),
    category: NonSettingCommandTypes.playmode,
  },
  {
    name: "30s",
    callee: () => updateTimer(30),
    category: SettingCommandTypes.timer,
  },
  {
    name: "60s",
    callee: () => updateTimer(60),
    category: SettingCommandTypes.timer,
  },
  {
    name: "90s",
    callee: () => updateTimer(90),
    category: SettingCommandTypes.timer,
  },
  {
    name: "30",
    callee: () => updateWordsLength(30),
    category: SettingCommandTypes.words_length,
  },
  {
    name: "60",
    callee: () => updateWordsLength(60),
    category: SettingCommandTypes.words_length,
  },
  {
    name: "90",
    callee: () => updateWordsLength(90),
    category: SettingCommandTypes.words_length,
  },
  {
    name: "About Typo",
    callee: () => aboutStore.update((about) => (about = !about)),
    category: NonSettingCommandTypes.misc,
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
