import { useEffect, useState } from "react";

export default function RandomColor() {
  // State to track color type (hex or rgb)
  const [typeOfColor, setTypeOfColor] = useState("hex");
  // State to store the current color value
  const [color, setColor] = useState("#000000");

  /**
   * Utility function to generate random numbers
   * @param {number} length - Maximum value for random number
   * @returns {number} Random number between 0 and length-1
   */
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  /**
   * Generates a random HEX color
   * Creates a 6-character hex color code starting with #
   */
  function handleCreateRandomHexColor() {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  /**
   * Generates a random RGB color
   * Creates an RGB color string with random values for red, green, and blue
   */
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  // Generate initial color when component mounts or color type changes
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}