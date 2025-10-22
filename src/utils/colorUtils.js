import chroma from "chroma-js";

export const generateRandomColor = () => {
    return chroma.random().hex();
};