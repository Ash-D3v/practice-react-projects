# 🎨 Random Color Generator

A dynamic React component that generates random HEX and RGB colors. It provides an interactive way to explore different colors and switch between color formats.

## 🎯 Overview

This component serves as a fun and educational tool for generating random colors. It displays the generated color as the background of the entire viewport and shows the corresponding HEX or RGB value. Users can switch between color formats and generate new colors on demand.

## ✨ Features

- 🎨 **Random Color Generation**: Creates random HEX and RGB colors
- 🔄 **Format Switching**: Switch between HEX and RGB formats
- 🖥️ **Fullscreen Preview**: Displays the color as a fullscreen background
- 📋 **Value Display**: Shows the current color value (e.g., `#RRGGBB` or `rgb(r, g, b)`)
- 🚀 **Instant Generation**: Generate new colors with a button click
- 📱 **Responsive Design**: Works on all screen sizes
- 💡 **Simple & Lightweight**: Minimal code and dependencies

## 🛠️ Technologies Used

- **React Hooks**: `useState`, `useEffect`
- **JavaScript**: Core logic for color generation
- **Inline CSS**: For dynamic background styling

## 📁 File Structure

```
random_colour/
├── index.jsx      # Main component file
└── README.md      # This file
```

## 🚀 Usage

### Basic Implementation

```jsx
import RandomColor from './components/random_colour';

function App() {
  return (
    <div className="App">
      <RandomColor />
    </div>
  );
}
```

### Component Props

This component does not accept any props as it is self-contained.

## 🔧 How It Works

### 1. State Management

```jsx
const [typeOfColor, setTypeOfColor] = useState("hex"); // 'hex' or 'rgb'
const [color, setColor] = useState("#000000");       // Current color value
```

### 2. Color Generation Logic

#### `handleCreateRandomHexColor()`
- Generates a random 6-digit hexadecimal color code.
- Uses an array of hex characters `[0-9, A-F]`.
- Constructs the color string by randomly picking 6 characters.

```jsx
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexColor = "#";
for (let i = 0; i < 6; i++) {
  hexColor += hex[randomColorUtility(hex.length)];
}
setColor(hexColor);
```

#### `handleCreateRandomRgbColor()`
- Generates a random RGB color value.
- Uses a utility function to get random numbers between 0 and 255 for Red, Green, and Blue.
- Constructs the `rgb(r, g, b)` string.

```jsx
const r = randomColorUtility(256);
const g = randomColorUtility(256);
const b = randomColorUtility(256);
setColor(`rgb(${r},${g}, ${b})`);
```

### 3. User Interaction

- **"Create HEX Color" button**: Sets `typeOfColor` to `'hex'`, triggering a `useEffect` to generate a new HEX color.
- **"Create RGB Color" button**: Sets `typeOfColor` to `'rgb'`, triggering a `useEffect` to generate a new RGB color.
- **"Generate Random Color" button**: Calls either `handleCreateRandomHexColor` or `handleCreateRandomRgbColor` based on the current `typeOfColor`.

### 4. `useEffect` Hook

A `useEffect` hook listens for changes in `typeOfColor` and calls the appropriate color generation function. This ensures a new color of the correct format is generated when the user switches types.

```jsx
useEffect(() => {
  if (typeOfColor === "rgb") handleCreateRandomRgbColor();
  else handleCreateRandomHexColor();
}, [typeOfColor]);
```

## 🎨 Styling

- The background color of the main `div` is dynamically set using inline styles with the `color` state variable.
- The UI elements (buttons and text) are styled for high visibility against any random color.

```jsx
<div
  style={{
    width: "100vw",
    height: "100vh",
    background: color,
  }}
>
  {/* UI Elements */}
</div>
```

## 🔍 Key Functions

### `randomColorUtility(length)`
- A helper function to generate a random integer within a given range.
- `Math.floor(Math.random() * length)`

## 🎯 Use Cases

- **Design Inspiration**: Quickly generate colors for design projects.
- **Learning Tool**: Understand how HEX and RGB color formats work.
- **UI Prototyping**: Test UI elements against different background colors.
- **Fun Project**: A simple and engaging component for React beginners.

## 🔮 Future Enhancements

- [ ] **Copy to Clipboard**: Add a button to copy the color value.
- [ ] **Color History**: Keep a history of generated colors.
- [ ] **Manual Input**: Allow users to input their own color values.
- [ ] **Color Palettes**: Generate entire color palettes.
- [ ] **Animations**: Add smooth transitions between color changes.
- [ ] **Accessibility Check**: Show contrast ratio information.
- [ ] **Save Favorites**: Allow users to save their favorite colors.

## 🤝 Contributing

Feel free to contribute by:
- Adding any of the future enhancements listed above.
- Improving the UI/UX.
- Optimizing the color generation logic.

## 📞 Support

For questions or issues, please create a new issue in the repository.

---

⭐ **Star this component if you found it helpful!** ⭐ 