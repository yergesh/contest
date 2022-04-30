const light = {
	dark: false,
	colors: {
		background: '#fafafa',
		surface: '#ffffff',
		primary: '#e9edc9',
		'primary-darken-1': '#ccd5ae',
		secondary: '#faedcd',
		'secondary-darken-1': '#d4a373',
		error: '#B00020',
		info: '#2196F3',
		success: '#4CAF50',
		warning: '#FB8C00',
	},

}

const dark = {
	dark: true,
	colors: {
		background: "#121212",
		surface: "#212121",
		"surface-variant": "#BDBDBD",
		"on-surface-variant": "#424242",
		primary: "#212121",
		"primary-darken-1": "#3700B3",
		secondary: "#03DAC5",
		"secondary-darken-1": "#03DAC5",
		error: "#CF6679",
		info: "#2196F3",
		success: "#4CAF50",
		warning: "#FB8C00",
		"on-background": "#fff",
		"on-surface": "#fff",
		"on-primary": "#fff",
		"on-primary-darken-1": "#fff",
		"on-secondary": "#000",
		"on-secondary-darken-1": "#000",
		"on-error": "#fff",
		"on-info": "#fff",
		"on-success": "#fff",
		"on-warning": "#fff"
	},
	"variables": {
		"border-color": "#FFFFFF",
		"border-opacity": 0.12,
		"high-emphasis-opacity": 0.87,
		"medium-emphasis-opacity": 0.6,
		"disabled-opacity": 0.38,
		"idle-opacity": 0.1,
		"hover-opacity": 0.04,
		"focus-opacity": 0.12,
		"selected-opacity": 0.08,
		"activated-opacity": 0.12,
		"pressed-opacity": 0.16,
		"dragged-opacity": 0.08,
		"kbd-background-color": "#212529",
		"kbd-color": "#FFFFFF",
		"code-background-color": "#B7B7B7"
	}
}

export { light, dark };
