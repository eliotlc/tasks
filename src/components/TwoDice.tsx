import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [value1, setValue1] = useState<number>(1);
    const [value2, setValue2] = useState<number>(2);
    return (
        <div>
            <Button
                onClick={() => {
                    setValue1(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setValue2(d6());
                }}
            >
                Roll Right
            </Button>
            <br></br>
            <span data-testid="left-die">{value1}</span>
            <span data-testid="right-die">{value2}</span>
            {value1 === value2 && value1 === 1 && <p>Lose</p>}
            {value1 === value2 && value1 !== 1 && <p>Win</p>}
        </div>
    );
}
