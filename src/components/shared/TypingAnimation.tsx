"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = ({ sequence }: { sequence: (string | number)[] }) => {
    return <TypeAnimation sequence={sequence} speed={50} repeat={Infinity} />;
};

export default TypingAnimation;
