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