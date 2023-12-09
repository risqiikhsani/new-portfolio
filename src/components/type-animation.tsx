"use client";

import { TypeAnimation } from "react-type-animation";
import React from "react";
import { CardTitle } from "./ui/card";

export default function CustomTypeAnimation() {
    const [textColor, setTextColor] = React.useState("text-cyan-100");

    return (
        <>
            <CardTitle className={`${textColor} font-bold`}>
                <TypeAnimation
                    sequence={[
                        "Welcome",
                        800,
                        () => setTextColor("text-cyan-200"),
                        "Welcome to",
                        800,
                        () => setTextColor("text-cyan-300"),
                        "Welcome to My Portfolio",
                        1000,
                        () => setTextColor("text-cyan-400"),
                        "",
                    ]}
                    repeat={Infinity}
                />
            </CardTitle>
        </>
    );
}
