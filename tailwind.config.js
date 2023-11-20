/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Agendalo Color Palette (Retro)
        "agendalo-orange-700": '#ff3618',
        "agendalo-orange-500": '#ff6c2e',
        "agendalo-orange-300": '#ffae6c',
        "agendalo-orange-100": '#fcddaf',
        "agendalo-blue-100": '#71afa4',
        "agendalo-blue-300": '#058d9d',
        "agendalo-blue-500": '#016d93',
        "agendalo-blue-700": '#011f51',
      }
    },
  },
  plugins: [],
}

