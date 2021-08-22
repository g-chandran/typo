import { Writable, writable } from "svelte/store";
import type { Playmodes, Themes, Units } from "../types/mainTypes";
import {
  getTimerDuration,
  getTheme,
  getPlaymode,
  getWordsLength,
} from "./utils/properties";

export const timer: Writable<number> = writable(getTimerDuration());
export const score: Writable<number> = writable(0);
export const theme: Writable<Themes> = writable(getTheme());
export const playmode: Writable<Playmodes> = writable(getPlaymode());
export const wordsLength: Writable<Units> = writable(getWordsLength());
export const aboutStore: Writable<boolean> = writable(false);
export const command: Writable<string> = writable("");
