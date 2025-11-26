import chroma from "chroma-js";

export const generateRandomColor = () => {
    return chroma.random().hex();
};

export const createColorObject = () => {
    return {
        id: crypto.randomUUID(),
        hex: generateRandomColor(),
        isLocked: false,
    };
};

export const generateRandomPalette = (colors) => {
    return colors.map((color) => {
        if (color.isLocked) {
            return color;
        }
        return createColorObject();
    });
};