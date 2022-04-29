import React from "react";
import NumberFormat from 'react-number-format';

interface MobileNoInputProps {
    id?: string,
    type?: string,
    name: string,
    value?: string,
    label: string,
    isDisabled?: boolean,
    placeholder?: string,
    customClassName?: string,
    onChange?: (value: string) => void
}

const MobileNoInput = ({ 
    id = '', 
    type = 'text', 
    name, 
    customClassName = '', 
    isDisabled = false, 
    placeholder = '', 
    label, 
    value = '',
    onChange 
}: MobileNoInputProps) => {

    const handleChange = (e: { target: { value: string; }; }) => {
        if(onChange){
            onChange(e.target.value)
        }
    }
    
    return (
        <>
            <label data-testid="text-input-label-1" htmlFor={id} className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">{label}</label>
            <div className="relative">
                <NumberFormat
                    data-testid='text-input-1'
                    id={id}
                    name={name}
                    className={`text-sm sm:text-base placeholder-gray-500 px-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 ${customClassName}`}
                    placeholder={placeholder}
                    disabled={isDisabled}
                    format="+(##) ##-### ####"
                    mask="_"
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

export { MobileNoInput };
export type { MobileNoInputProps };
