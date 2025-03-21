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
        'palette-olivine': '#afc97e', // olivine
        'palette-teagreen': '#d4e6b5', // tea green
        'palette-ochre': '#db7c26', // ochre
        'palette-flame': '#d8572a', // flame
        'palette-razzmatazz': '#de3f74', // razzmatazz

        'palette-positive': '#afc97e', // olivine
        'palette-negative': '#d8572a', // flame

        'palette-background': '#f5f5f5', // white smoke
        'palette-foreground': '#373737', // jet

        'palette-text-primary': '#373737', // jet
        'palette-text-secondary': '#5c6a60', // feldgrau (more greenish)
        // 'palette-text-secondary': '#5E6861', // ebony (less green)
        'palette-text-accent': '#de3f74', // razzmatazz
        'palette-text-error': '#d8572a', // flame

        'palette-primary': '#afc97e', // olivine
        'palette-secondary': '#d4e6b5', // tea green
        'palette-accent': '#de3f74', // razzmatazz
        'palette-error': '#d8572a', // flame
      },
    },
  },
  plugins: [],
}
