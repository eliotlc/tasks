import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    doubleValue,
}: {
    doubleValue: () => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                doubleValue();
            }}
        >
            Double
        </Button>
    );
}

function Halver({ halveValue }: { halveValue: () => void }): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                halveValue();
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const doubleValue = () => {
        setDhValue(dhValue * 2);
    };
    const halveValue = () => {
        setDhValue(dhValue / 2);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler doubleValue={doubleValue}></Doubler>
            <Halver halveValue={halveValue}></Halver>
        </div>
    );
}
