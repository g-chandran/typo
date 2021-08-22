import type { Writable } from "svelte/store";
import {
  NonSettingCommandTypes,
  SettingCommandTypes,
} from "../../types/masterEnums";
import {
  command,
  isCommandPaletteActive,
  playmode,
  theme,
  timer,
  wordsLength,
} from "../masterStore";

export interface MenuInterface {
  category: string;
  showOnMenu: boolean;
  callee: () => void;
  position: "left" | "right";
  value: Writable<string | number>;
  prefix?: string;
  suffix?: string;
}

const updateCommand = (cmd: string) => {
  isCommandPaletteActive.set(true);
  command.set(cmd);
};

export let menus: MenuInterface[] = [
  {
    category: NonSettingCommandTypes.playmode,
    showOnMenu: true,
    callee: () => {
      updateCommand(NonSettingCommandTypes.playmode);
    },
    position: "left",
    value: playmode,
  },
  {
    category: NonSettingCommandTypes.theme,
    showOnMenu: false,
    callee: () => {
      updateCommand(NonSettingCommandTypes.theme);
    },
    position: "left",
    value: theme,
  },
  {
    category: SettingCommandTypes.timer,
    showOnMenu: true,
    callee: () => {
      updateCommand(SettingCommandTypes.timer);
    },
    position: "right",
    value: timer,
    suffix: "s",
  },
  {
    category: SettingCommandTypes.words_length,
    showOnMenu: true,
    callee: () => {
      updateCommand(SettingCommandTypes.words_length);
    },
    position: "right",
    value: wordsLength,
  },
];
