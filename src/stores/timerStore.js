import {writable} from 'svelte/store';
import {getTimerDuration} from '../stores/utils/properties.js';

export const timer = writable(getTimerDuration());