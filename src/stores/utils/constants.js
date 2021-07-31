export const STAGES = Object.freeze({
	START: "start",
	END: "end",
	PROGRESS: "progress",
});

export const STATUS = Object.freeze({
	UNWRITTEN: 'unWritten',
	CORRECT: 'correct',
	INCORRECT: 'incorrect'
});

export const WORD_SET_THRESHOLD = 50;
export const TIMER_DURATION = 60;

export const COLORS = Object.freeze({ORANGE_COLOR: "#ff3e00", BLACK: "#000", WHITE: "#fff", GRAY: "#808080"})
export const THEME_COLORS = Object.freeze({
	DARK_1: "#28293d", DARK_2: "#555770", DARK_3: "#24292E",
	LIGHT_1: "#fafafc", LIGHT_2: "#f2f2f5", LIGHT_3: "#ebebf0", 
});
export const THEMES = Object.freeze({DARK: "dark", LIGHT: "light"})
export const BUTTON_COLORS = Object.freeze({ORANGE: "orange", THEME: "theme"})
export const PLAYMODES = Object.freeze({
	CLASSIC: "classic",
	REVERSE_CLASSIC: "reverse_classic"
})

export const ABOUT_INFO = Object.freeze({
	TITLE: "You're here. Woo-hoo! Start typing to know about Typo.",
	CONTENT: "typo:a fast,:powerful,:playful app:to improve your typing skills.:" + 
					"playmodes,:settings,:themes:to make it more fun.:now type it,:typo it,:repeat it.:it keeps evolving."
})