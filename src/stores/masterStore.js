import { writable } from "svelte/store";
import { getTimerDuration, getTheme } from "./utils/properties";

export const timer = writable(getTimerDuration());
export const score = writable(0);
export const theme = writable(getTheme());