const lynxPreset = require('@lynx-js/tailwind-preset')

/** @type {import('tailwindcss').Config} */
export default {
  presets: [lynxPreset], // Use the preset
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // light mode
        'palette-white-smoke': '#f5f5f5', // white smoke
        'palette-jet': '#373737', // jet
        'palette-teagreen': '#d4e6b5', // tea green
        'palette-olivine': '#afc97e', // olivine
        'palette-ochre': '#db7c26', // ochre
        'palette-flame': '#d8572a', // flame
        'palette-razzmatazz': '#de3f74', // razzmatazz

        'palette-background': '#f5f5f5', // white smoke
        'palette-text': '#373737', // jet
        'palette-accent': '#de3f74', // razzmatazz
        'palette-positive': '#afc97e', // olivine
        'palette-negative': '#d8572a', // flame
      },
    },
  },
  plugins: [],
}
