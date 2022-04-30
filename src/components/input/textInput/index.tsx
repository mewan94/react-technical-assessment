import React from "react";

interface TextInputProps {
    id?: string,
    type?: 'text' | 'email' | 'password',
    name: string,
    label: string,
    value?: string,
    isDisabled?: boolean,
    isRequired?: boolean,
    placeholder?: string,
    customClassName?: string,
    onChange?: (value: string) => void
}

const TextInput = ({
    id = '',
    type = 'text',
    name,
    value = '',
    customClassName = '',
    isDisabled = false,
    placeholder = '',
    label,
    onChange,
    isRequired=false
}: TextInputProps) => {

    const handleChange = (e: { target: { value: string; }; }) => {
        if(onChange){
            onChange(e.target.value)
        }
    }

    return (
        <>
            <label data-testid="text-input-label-1" htmlFor={id} className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">{label}</label>
            <div className="relative">
                <input
                    data-testid="text-input-1"
                    id={id}
                    type={type}
                    name={name}
                    defaultValue={value}
                    className={`text-sm sm:text-base placeholder-gray-500 px-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 ${customClassName}`}
                    placeholder={placeholder}
                    disabled={isDisabled}
                    onChange={handleChange}
                    required={isRequired}
                />
            </div>
        </>
    )
}

export { TextInput };
export type { TextInputProps };
