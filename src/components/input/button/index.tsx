import React from "react";

interface ButtonProps {
    id?: string,
    btnType: "button" | "submit" | "reset",
    label: string,
    isDisabled?: boolean,
    onClick: () => void;
}

const Button = ({ id = '', btnType = 'button', label, isDisabled, onClick }: ButtonProps) => {
    return (
        <button
            data-testid='button-1'
            id={id}
            type={btnType}
            disabled={isDisabled}
            onClick={onClick}
            className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
        >
            <span data-testid='button-span-1' className="mr-2 uppercase">{label}</span>
        </button>
    )
}

export { Button };
export type { ButtonProps };

