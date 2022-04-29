import React from "react";

type optionType = {
    label: string,
    value: string
}

interface DropDownProps {
    customClass?: string,
    options: optionType[],
    title: string,
    name: string,
    value?: string | undefined,
    onChange: (value: optionType) => void,
    isDisabled?: boolean
}

const DropDown = ({ customClass = '', options, title = '', name, value=undefined, onChange, isDisabled=false }: DropDownProps) => {

    const handleChange = (option: optionType) => {
        if(onChange){
            onChange(option)
        }
    }

    return (
        <>
            <label data-testid='dropdown-label-1' htmlFor={'id'} className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">{title}</label>
            <select
                data-testid='dropdown-select-1'
                name={name}
                defaultValue={value}
                disabled={isDisabled}
                className={`text-sm sm:text-base placeholder-gray-500 px-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 cursor-pointer ${customClass}`}
            >
                {options.map(op => {
                    return (<option data-testid='dropdown-option-1' key={op.value} value={op.value} onClick={() => handleChange(op)}>{op.label}</option>)
                })}
            </select>
        </>
    )
}

export { DropDown }
export type { DropDownProps }