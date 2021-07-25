import { writable } from "svelte/store";
import { getTimerDuration, getTheme, getPlaymode, getWordsLength } from "./utils/properties";

export const timer = writable(getTimerDuration());
export const score = writable(0);
export const theme = writable(getTheme());
export const playmode = writable(getPlaymode());
export const wordsLength = writable(getWordsLength());