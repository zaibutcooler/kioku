/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // bit,
        // byte,
        // normal: "",
        // mb,
        // gb,
        xs: "0.65rem", // Extra small font size
        sm: "0.75rem", // Small font size
        base: "0.8", // Base font size
        lg: "1rem", // Large font size
        xl: "1.2rem", // Extra large font size
      },
    },
  },
  plugins: [],
};
