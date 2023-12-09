"use client";
import { TypeAnimation } from "react-type-animation";
import { CardDescription } from "./ui/card";

export default function CustomeTypeAnimation2() {
    return (
        <>
            <CardDescription>
                <TypeAnimation
                    style={{ whiteSpace: "pre-line", display: "block" }}
                    sequence={[
                        `const his_tech_passion = [\n"🚀 Full-Stack Developer",\n"🎨 Front-End Enthusiast",\n"⚙️ Back-End Wizard"\n"🕹️ Game Development Enthusiast",\n"🛠️ DevOps Magician",\n];\n

        const his_other_passion = [\n"🐱 Cat Lover Extraordinaire 🐾",\n"🏞️ Nature Explorer and Enthusiast 🌳"\n];`,
                        1000,
                        "",
                    ]}
                    deletionSpeed={99}
                    repeat={Infinity}
                />
            </CardDescription>
        </>
    );
}
