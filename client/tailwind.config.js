/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "20px",
            },
            borderWidth: {
                3: "3px",
            },
        },
    },
    plugins: [],
};
