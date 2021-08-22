import type { Writable } from "svelte/store";
import {
  NonSettingCommandTypes,
  SettingCommandTypes,
} from "../../types/masterEnums";
import { playmode, theme, timer, wordsLength } from "../masterStore";

export interface MenuInterface {
  category: string;
  showOnMenu: boolean;
  callee: () => void;
  position: "left" | "right";
  value: Writable<string | number>;
  prefix?: string;
  suffix?: string;
}

export let menus: MenuInterface[] = [
  {
    category: NonSettingCommandTypes.playmode,
    showOnMenu: true,
    callee: () => {
      console.log(NonSettingCommandTypes.playmode);
    },
    position: "left",
    value: playmode,
  },
  {
    category: NonSettingCommandTypes.theme,
    showOnMenu: false,
    callee: () => {},
    position: "left",
    value: theme,
  },
  {
    category: SettingCommandTypes.timer,
    showOnMenu: true,
    callee: () => {},
    position: "right",
    value: timer,
    suffix: "s",
  },
  {
    category: SettingCommandTypes.words_length,
    showOnMenu: true,
    callee: () => {},
    position: "right",
    value: wordsLength,
  },
];
