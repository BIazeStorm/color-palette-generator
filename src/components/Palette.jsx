import React from "react";
import ColorBlock from "./ColorBlock";

function Palette({ colors }) {
    return (
        <div className="Palette">
            {colors.map((color) => (
                <ColorBlock key={color.id} color={color} />
            ))}
        </div>
    );
}

export default Palette;