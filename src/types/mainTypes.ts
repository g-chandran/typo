/* 
Type for working with different pages of the application
start: Homepage
end: Result
progress: TypeProgress
about: About
*/
export type Stages = "start" | "end" | "progress" | "about";

/* 
Type for Theming
dark: Dark Theme
light: Light Theme
*/
export type Themes = "dark" | "light";

/* 
Type for Operating system of the User
*/
export type OS = "Android" | "iOS" | "MacOS" | "Windows" | "Linux" | null;

/* 
Type for UpdateStage Custom Event
position: to set forward or backward
result: result text to be displayed on the result page
*/
export type UpdateStage = { position: boolean; result: string };

/* 
Type for choosing between the Playmodes
*/
export type Playmodes = "classic" | "reverse_classic";

/* 
Units used for updating the Settings
*/
export type Units = 0 | 30 | 60 | 90;
