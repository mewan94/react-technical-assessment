import React from "react";

interface HiddenInputProps {
    label: string, 
    value: string, 
    isHidden: boolean
}

const HiddenInput = ({label, value, isHidden}: HiddenInputProps) => {
    return(
        <input data-testid='hidden-input-1' name={label} readOnly={true} value={value} hidden={isHidden}></input>
    )
}

export { HiddenInput }
export type{ HiddenInputProps }