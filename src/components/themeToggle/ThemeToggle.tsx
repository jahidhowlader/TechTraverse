"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

const ThemeToggle = () => {

    const themeContext = useContext(ThemeContext);

    const toggle = themeContext?.toggle;
    const theme = themeContext?.theme;

    if (toggle === undefined || theme === undefined) {

        return null;
    }

    return (
        <div
            className={'w-10 h-5 rounded-full cursor-pointer flex items-center justify-between relative px-1'}
            onClick={toggle}
            style={
                theme === "dark" ? { backgroundColor: "#5D01EE" } : { backgroundColor: "#0f172a" }
            }
        >
            <Image
                src="/moon.png"
                alt="moon"
                width={14}
                height={14} />

            <div
                className={'w-4 h-4 rounded-full absolute'}
                style={
                    theme === "dark"
                        ? { left: 1, background: "#0f172a" }
                        : { right: 1, background: "white", }
                }
            ></div>
            <Image src="/sun.png" alt="" width={14} height={14} />
        </div>
    );
};

export default ThemeToggle;