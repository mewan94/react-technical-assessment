import React, { } from 'react';
import { RadioBtn } from './radio.button';

type optionType = {
    label: string,
    value: string
}

interface RadioBtnGroupProps {
    customClass?: string,
    name: string,
    options: optionType[],
    title: string,
    onChange?: (value: optionType) => void,
    value?: string | number,
    isDisabled?: boolean
}

const RadioBtnGroup = ({ customClass = '', options, name, title, onChange, value, isDisabled= false }: RadioBtnGroupProps) => {

    const handleChange = (option: optionType) => {
        if(onChange){
            onChange(option)
        }
    }

    return (
        <>
            <label data-testid='radio-label-1' className={`mb-1 text-xs sm:text-sm tracking-wide text-gray-600 ${customClass}`}>{title}</label>
            {options.map((op, i) => {
                const radioId = `${name}-option-${i}`
                return (
                    <RadioBtn
                        key={radioId}
                        id={radioId}
                        label={op.label}
                        value={op.value}
                        name={name}
                        onChange={() => handleChange(op)}
                        selected={op.value === value}
                        isDisabled={isDisabled}
                    />
                )
            })}

        </>
    )
}

export { RadioBtnGroup };
export type { RadioBtnGroupProps };
