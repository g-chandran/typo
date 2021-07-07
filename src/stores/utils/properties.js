import {timer} from '../timerStore';

const persistentProperties = [
    ['timer_duration', 60]
  ];

let properties = new Map(persistentProperties);

export const updateTimerDuration = value => {
  if (![30, 60, 90, 120].includes(value)) return;
  properties.set('timer_duration', value);
  timer.set(value);
}

export const getTimerDuration = () => properties.get('timer_duration');