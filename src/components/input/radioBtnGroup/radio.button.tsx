import React, { } from 'react';

interface RadioBtnProps {
    id: string,
    label: string,
    value: string,
    name: string,
    onChange: () => void,
    selected?: boolean,
    isDisabled: boolean
}

const RadioBtn = ({ label, value, id, name, onChange, selected, isDisabled }: RadioBtnProps) => {
    return (
        <div data-testid='radio-input-wrapper-1' className="flex items-center mb-4">
            <input
                id={id}
                data-testid='radio-input-1'
                type="radio"
                name={name}
                value={value}
                className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                aria-labelledby={id}
                aria-describedby={id}
                onClick={onChange}
                defaultChecked={selected}
                disabled={isDisabled}
            />
            <label data-testid='radio-label-2' htmlFor={id} className="text-sm font-medium text-gray-900 ml-2 block">
                {label}
            </label>
        </div>
    )
}

export { RadioBtn };
export type { RadioBtnProps };
