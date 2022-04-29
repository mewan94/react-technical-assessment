import React from 'react';

interface FormHeaderProps {
    customClass?: string,
    title: string
}

const FormHeader = ({title, customClass=''}: FormHeaderProps) => {
    return(
        <div className={`font-medium self-center text-xl sm:text-2xl uppercase text-gray-800 ${customClass}`}>{title}</div>
    )
}

export { FormHeader }