import React from "react";

function Controls({ onGenerate }) {
    return (
        <div className="Controls">
            <button className="Controls__btn" onClick={onGenerate}>
                Generate
            </button>
        </div>
    );
}

export default Controls;