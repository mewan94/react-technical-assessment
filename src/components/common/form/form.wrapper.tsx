import React, { ReactNode } from 'react';

interface FormWrapperProps {
    children: ReactNode | ReactNode[],
    customClass?: string,
}

const FormWrapper = ({children, customClass=''}: FormWrapperProps) => {
    return(
        <form className={customClass} action="#">
            {children}
        </form>
    )
}

export { FormWrapper }