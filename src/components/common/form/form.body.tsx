import React, { ReactNode } from 'react';

interface FormBodyProps {
    children: ReactNode | ReactNode[],
    customClass?: string,
}

const FormBody = ({children, customClass=''}: FormBodyProps) => {
    return(
        <div className={`${customClass}`}>{children}</div>
    )
}

export { FormBody }