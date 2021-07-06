export const THEME_COMMANDS = [
  {name: "Theme: Dark", callee: () => console.log("Dark theme")},
  {name: "Theme: Light", callee: () => console.log("Light theme")},
];

export const PLAYMODE_COMMANDS = [
  {name: "Playmode: Classic", callee: () => console.log("Classic Mode")},
  {name: "Playmode: Reverse Classic", callee: () => console.log("Reverse Classic Mode")},
];

export const SETTINGS_COMMANDS = [
  {name: "Timer: 30s", callee: () => console.log("Timer, 30s")},
  {name: "Timer: 60s", callee: () => console.log("Timer, 60s")},
  {name: "Timer: 90s", callee: () => console.log("Timer, 90s")},
  {name: "Timer: 120s", callee: () => console.log("Timer, 120s")},
];

export const COMMAND_FILTERS = Object.freeze(
  {SETTINGS_FILTER: '@', PLAYMODE_FILTER: '#', THEME_FILTER: '>'}
);