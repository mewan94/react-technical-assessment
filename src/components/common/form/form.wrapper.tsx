import React, { ReactNode } from 'react';

interface FormWrapperProps {
    children: ReactNode | ReactNode[],
    customClass?: string,
    onSubmit:(values: object) => void
}

const FormWrapper = ({children, customClass='', onSubmit}: FormWrapperProps) => {
    return(
        <form 
        className={customClass} 
        onSubmit={(e:any) => {
            e.preventDefault()
            let fObject = new FormData(e.target).entries()
            if(onSubmit){
                onSubmit(Object.fromEntries(fObject))
            }
        }}
        >
            {children}
        </form>
    )
}

export { FormWrapper }