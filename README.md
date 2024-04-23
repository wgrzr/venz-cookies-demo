# Starter base

A starting point to help you set up your project quickly and use the common components provided by `react-native-reusables`. The idea is to make it easier for you to get started.

## Features

- NativeWind v4
- Dark and light mode
  - Android Navigation Bar matches mode
  - Persistant mode
- Common components
  - Icons, ThemeToggle, Avatar, Button, Card, Progress, Text, Tooltip

<img src="https://github.com/mrzachnugent/react-native-reusables/assets/63797719/42c94108-38a7-498b-9c70-18640420f1bc"
     alt="starter-base-template"
     style="width:270px;" />

     ```js

module.exports = {
content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
theme: {
extend: {
colors: {
"jagged-ice": {
50: "#f0fbfb",
100: "#c8efef",
200: "#b8e8e9",
300: "#86d7da",
400: "#4ebdc2",
500: "#32a1a8",
600: "#2c838e",
700: "#2a6a74",
800: "#2a5860",
900: "#264b53",
950: "#153037",
},
},
},
},
plugins: [],
};

     ```
