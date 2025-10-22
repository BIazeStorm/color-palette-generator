import React from "react";
import ColorBlock from "./ColorBlock";

function Palette({ colors, onToggleLock }) {
    return (
        <div className="Palette">
            {colors.map((color) => (
                <ColorBlock 
                    key={color.id}
                    color={color}
                    onToggleLock={onToggleLock}
                />
            ))}
        </div>
    );
}

export default Palette;