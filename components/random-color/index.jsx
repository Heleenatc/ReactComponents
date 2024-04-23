import { useEffect, useState } from "react";
import "./styles.css";

export default function RandomColor() {
  // states for type and current color
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function generateRandomNumber(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandomNumber(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRGBColor() {
    const r = generateRandomNumber(256);
    const g = generateRandomNumber(256);
    const b = generateRandomNumber(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  //Update the page accordingly each time the typeOfColor changes
  useEffect(() => {
    if (typeOfColor === "hex") handleCreateRandomHexColor();
    else handleCreateRandomRGBColor();
  }, [typeOfColor]);

  return (
    <div
      className="container"
      style={{
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRGBColor
        }
      >
        Generate Random Color
      </button>
      <div class="colorinfo">
        <h1>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h1>
        <h3>{color}</h3>
      </div>
    </div>
  );
}
