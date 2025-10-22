import React from "react";
import ColorBlock from "./ColorBlock";

function Palette({ colors, onToggleLock, onUpdateColor }) {
    return (
        <div className="Palette">
            {colors.map((color) => (
                <ColorBlock 
                    key={color.id}
                    color={color}
                    onToggleLock={onToggleLock}
                    onUpdateColor={onUpdateColor}
                />
            ))}
        </div>
    );
}

export default Palette;