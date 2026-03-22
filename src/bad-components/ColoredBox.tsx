import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    setter,
    currentIndex,
}: {
    setter: (newIndex: number) => void;
    currentIndex: number;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setter((1 + currentIndex) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({
    currentIndex,
}: {
    currentIndex: number;
}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[currentIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    currentIndex={colorIndex}
                    setter={setColorIndex}
                ></ChangeColor>
                <ColorPreview currentIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
