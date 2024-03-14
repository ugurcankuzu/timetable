"use client";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Variants, motion } from "framer-motion";
import { FocusEvent, InputHTMLAttributes, useState } from "react";

interface IAnimatedInputComponent {
  inputSettings?: InputHTMLAttributes<HTMLInputElement>;
  label: string;
  iconInLabel?: IconProp;
  labelAnimation?: "SLIDE_RIGHT";
  
}

export default function Input({
  inputSettings,
  label,
  iconInLabel,
}: IAnimatedInputComponent) {
  const [isInputFocused, setInputFocused] = useState<Boolean>(false);
  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setInputFocused(true);
  };
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setInputFocused(event.target.value !== "" ? true : false);
  };
  const animations: Variants = {
    SLIDE_RIGHT: {
      x: "100%",
    },
  };
  return (
    <div className={animatedInputStyles.inputWrapper}>
      <motion.p
        className="w-full h-full text-gray-500 absolute pointer-events-none z-[100] flex items-center px-2"
        animate={
          isInputFocused ? { x: "100%", opacity: 0 } : { x: 0, opacity: 1 }
        }
        transition={{ ease: "anticipate", duration: 0.5 }}
      >
        {iconInLabel && (
          <span>
            <FontAwesomeIcon icon={iconInLabel} className="text-sm px-2" />
          </span>
        )}
        {label}
      </motion.p>
      <input
        type="text"
        className="py-2 w-full absolute w-full h-full px-4"
        {...inputSettings}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

const animatedInputStyles = {
  inputWrapper: "w-full h-12 relative shadow rounded",
};
