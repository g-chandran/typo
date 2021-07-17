import { writable } from "svelte/store";
import { THEMES } from "./utils/constants";

export let theme = writable(THEMES.LIGHT);