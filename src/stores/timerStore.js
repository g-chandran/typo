import {writable} from 'svelte/store';
import { TIMER_DURATION } from '../stores/utils/constants.js'

export const timer = writable(TIMER_DURATION);